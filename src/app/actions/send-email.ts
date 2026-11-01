"use server";

import { EmailTemplate } from "@/app/contact-me/_components/email-template";
import { formSchema } from "@/lib/schemas/email-schema";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  message: string;
};

export async function sendEmail(values: z.infer<typeof formSchema>): Promise<FormState> {
  // validate on the server too — never trust client-side validation alone
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data. Please check your inputs." };
  }

  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "Contact Form <hello@razan-m-fahmy-dev.vercel.app/>", // ← replace with your verified domain in production
    // from: "Contact Form <onboarding@resend.dev>", // ← replace with your verified domain in production
    to: [process.env.CONTACT_EMAIL!],
    replyTo: email, // ← reply goes directly to the sender
    subject: `New message from ${name}`,
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }

  return { success: true, message: "Message sent! I'll get back to you soon." };
}
