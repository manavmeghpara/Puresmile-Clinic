import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import { NextResponse } from "next/server";


const mailgun = new Mailgun(FormData);
const client  = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY  || "API_KEY",
    // When you have an EU-domain, you must specify the endpoint:
    // url: "https://api.eu.mailgun.net"
});

export async function POST(req: Request) {
try {
        const body = await req.json();

        if (!body.name || !body.email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await client.messages.create(process.env.MAILGUN_DOMAIN || "", {
            from: "Mailgun Sandbox <postmaster@smitamdentalstudio.com>",
            to: "manav09meghpara@gmail.com",
            subject: "New Appointment Booking",
            text: `
                New Appointment Request:
                Name: ${body.name}
                Email: ${body.email}
                Service: ${body.service}
                Department: ${body.department}
                Message: ${body.message}
                            `,
        });
        console.log(req); // logs response data
        return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}