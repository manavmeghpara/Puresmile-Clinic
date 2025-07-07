import { NextRequest, NextResponse } from "next/server";
import { GenerateContentResponse, GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

// In-memory session store: { sessionId: { chat, history[] } }
const chatSessions = new Map<string, { chat: any; history: any[] }>();

export async function POST(req: NextRequest) {
    const { prompt, sessionId } = await req.json();
    const text = `You are Smitam AI, the official virtual health assistant for Smitam Multi-Speciality Dental Studio.
    Your role is to provide clear, friendly general health guidance, particularly about dental care. 
    Do not explain with a long form text and do not explain who you are. 
    Ask any clarifying questions when needing more information. 
    Output in plain text and line breaks when necessary. Do not output markdown format (do not print '*' in your output)
    Adjust line breaks so that lines are neither too short nor too long. Make sure each line has no more than 90 characters. Create new line for a separate topic or when presenting a numbered list.
    Company number is +91 7859836056 and Address: Pride signet, 308, Raiya telephone exchange circle, Tulsi Park, Rajkot, Gujarat 360007, India. 
    The two main doctors are 
    1. Dr. Mili Meghpara - Paediatric (kids) dentist, Sedation Specialist, DOUBLE GOLD MEDALIST (B.D.S., M.D.S.), Super Specialist in Children’s Dental care & Root Canal Treatments
    2. Dr. Shubham Godhani (B.D.S., M.D.S.) Prosthodontist Master in Cortico Basal Implant – Munich, Germany | Super Specialist in Basal Implants`

    if (!prompt || !sessionId) {
        return NextResponse.json({ error: "Missing prompt or sessionId" }, { status: 400 });
    }

    try {

        // Retrieve or create chat for this session
        let session = chatSessions.get(sessionId);
        let history: any;

        // First-time session setup
        if (!session) {
            history = [
                {
                    role: "user",
                    parts: [{ text: "Hello" }],
                },
                {
                    role: "model",
                    parts: [{ text: `Welcome! I am Smitam AI, your trusted health assistant for Smitam Multi-Speciality Dental Studio. 
I provide friendly, medically-informed general health guidance, particularly around dental care. Always consult licensed professionals for diagnoses or treatments.` }],
                },
            ];

             const chat = ai.chats.create({
                model: "gemini-2.5-flash",
                history,
                config: {
                    systemInstruction: text,
                },
            });

            session = { chat, history };
            chatSessions.set(sessionId, session);
        }

        // Add user's new message to history
        session.history.push({
            role: "user",
            parts: [{ text: prompt }],
        });

        // Recreate chat with updated history
        session.chat = ai.chats.create({
            model: "gemini-2.5-flash",
            history: session.history,
        });

        // Send latest message
        const response = await session.chat.sendMessage({
            message: prompt,
            config: {
                systemInstruction: text,
            },
        });

        // Save AI response to history
        session.history.push({
            role: "model",
            parts: [{ text: response.text }],
        });

        const responseText = response?.text || "I'm here to help you with general health guidance.";

        return NextResponse.json({ reply: responseText });

    } catch (error) {
        console.error("Gemini AI Error:", error);
        return NextResponse.json({ error: "AI service unavailable" }, { status: 500 });
    }
}
