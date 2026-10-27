// app/actions.ts
'use server';

import { Resend } from 'resend';

// Initialize the API client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  let name = formData.get('name');
  let email = formData.get('email');
  let message = formData.get('message');

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return { success: false };
  }

  name = name.trim();
  email = email.trim();
  message = message.trim();

  if (!name || !email || !message) {
    return { success: false };
  }

  // Prevent email injection by removing newlines and carriage returns
  const sanitizedName = name.replace(/[\r\n]+/g, ' ');
  const sanitizedEmail = email.replace(/[\r\n]+/g, '');

  try {
    const data = await resend.emails.send({
      from: 'Kuromaru Portfolio <onboarding@resend.dev>', // Default testing domain
      to: process.env.MY_EMAIL as string, // Delivers to YOU
      replyTo: sanitizedEmail, // Lets you hit "Reply" to answer them
      subject: `[UPLINK] New Signal from ${sanitizedName}`,
      text: `
        SENDER: ${sanitizedName} (${sanitizedEmail})
        ----------------------------------------
        ${message}
      `,
    });

    if (data.error) {
      console.error("An error occurred while sending the email.");
      return { success: false };
    }

    return { success: true };
  } catch {
    console.error("An unexpected system error occurred.");
    return { success: false };
  }
}