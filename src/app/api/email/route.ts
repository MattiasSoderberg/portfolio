import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY as string);

  const body = await req.json();
  const { name, email, message } = body;
  const toEmail = process.env.NEXT_TO_EMAIL as string;

  const msg = {
    to: toEmail,
    from: toEmail,
    subject: `New message from ${name}`,
    text: `Message from ${name}, ${email} \n\n ${message}`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    const err: any = error;
    console.error("Error sending email: ", err.response.body.errors);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { message: "Thank you for your email!" },
    { status: 200 }
  );
}
