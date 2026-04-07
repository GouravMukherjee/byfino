import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, occasion, eventDate, referral, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !occasion || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Build email content
    const emailContent = `
New Consultation Request — Fino Bespoke Tailoring

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Occasion: ${occasion}
Event Date: ${eventDate || "Not specified"}
Referral: ${referral || "Not specified"}

Message:
${message}

---
Sent from byfino.com contact form
    `.trim();

    // Log for development — replace with Resend/Nodemailer in production
    console.log("Contact form submission:", emailContent);

    // TODO: Add Resend integration
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@byfino.com',
    //   to: 'contact@byfino.com',
    //   subject: `New Consultation Request — ${firstName} ${lastName} (${occasion})`,
    //   text: emailContent,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
