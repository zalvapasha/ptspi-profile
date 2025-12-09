import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";

import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["zalvapasha1@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        fullName: "John Doe",
        companyName: "Example Inc.",
        country: "United States",
        email: "john@example.com",
        subject: "Hello world",
        subjectDetails: "Sample subject details",
        message: "This is a sample message body for testing.",
      }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
