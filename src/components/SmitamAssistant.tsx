"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";


const SmitamAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [sessionId, setSessionId] = useState(uuidv4());
    const [loading, setLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const openChat = () => {
        setIsOpen(true);
        // Intro message only if chat just opened
        if (messages.length === 0) {
            setMessages([
                {
                    role: "assistant",
                    content:
                        "👋 Hello! I'm Smitam AI, your trusted virtual health assistant from Smitam Multi-Speciality Dental Studio. Feel free to ask me general health or dental care questions.",
                },
            ]);
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/smitam-ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: input, sessionId }),
            });
            const data = await res.json();

            setMessages([...newMessages, { role: "assistant", content: data.reply || "I'm here to help!" }]);

        } catch (err) {
            console.error(err);
        } finally {

            setLoading(false);
            setTimeout(() => {
                chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
            }, 100);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => {openChat()}}
                className="fixed bottom-5 right-5 bg-sky-700 text-white rounded-full p-4 shadow-lg hover:bg-sky-500 transition z-50 flex items-center gap-2"
            >
                <Image src="/favicon.ico" alt="Smitam AI" width={30} height={30} className="rounded-full" />
                <span className="hidden sm:block font-semibold">Smitam AI</span>
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <motion.div
                        className="bg-white rounded-xl shadow-lg w-[90%] sm:w-[400px] max-h-[80%] flex flex-col overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        {/* Header */}
                        <div className="bg-sky-700 text-white p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Image src="/favicon.ico" alt="Smitam" width={24} height={24} className="rounded-full" />
                                <p className="font-bold">Smitam AI Assistant</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">✕</button>
                        </div>

                        {/* Chat Body */}
                        <div ref={chatRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`p-2 rounded-lg max-w-[80%] ${msg.role === "user" ? "ml-auto bg-sky-100" : "mr-auto bg-gray-100"}`}
                                >
                                    <p className="text-sm">{msg.content}</p>
                                </div>
                            ))}

                            {loading && (
                                <div className="mr-auto bg-gray-100 p-2 rounded-lg max-w-[80%] flex items-center gap-2 animate-pulse">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.1s]" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.2s]" />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.3s]" />
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask a health question..."
                                className="flex-1 border rounded px-3 py-2 text-sm"
                            />
                            <button onClick={handleSend} className="bg-sky-700 text-white px-4 rounded hover:bg-sky-500 text-sm">
                                Send
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default SmitamAssistant;
