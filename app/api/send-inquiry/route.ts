import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export interface InquiryBody {
  fullName: string;
  companyName?: string;
  country?: string;
  email: string;
  subject: string;
  subjectDetails?: string;
  message: string;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

export async function POST(req: Request) {
  let body: InquiryBody;
  try {
    body = (await req.json()) as InquiryBody;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request body. Please check your input.",
        details: getErrorMessage(error),
      },
      { status: 400 }
    );
  }

  if (!body.fullName || !body.email || !body.subject || !body.message) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Missing required fields. 'fullName', 'email', 'subject', and 'message' are required.",
      },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        success: false,
        error: "Server misconfiguration: email API key is not set.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error: sendError } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["zalvapasha1@gmail.com"],
      subject: body.subject,
      react: EmailTemplate({
        fullName: body.fullName,
        companyName: body.companyName,
        country: body.country,
        email: body.email,
        subject: body.subject,
        subjectDetails: body.subjectDetails,
        message: body.message,
      }),
    });

    if (sendError) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email.",
          details: getErrorMessage(sendError),
        },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          error: "Email was not sent due to an unknown error.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred.",
        details: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}
