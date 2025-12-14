// app/actions.ts
'use server';

import { Resend } from 'resend';

// Initialize the API client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    // Direct API Injection
    const data = await resend.emails.send({
      from: 'Kuromaru Portfolio <onboarding@resend.dev>', // Default testing domain
      to: process.env.MY_EMAIL as string, // Delivers to YOU
      reply_to: email, // Lets you hit "Reply" to answer them
      subject: `[UPLINK] New Signal from ${name}`,
      text: `
        SENDER: ${name} (${email})
        ----------------------------------------
        ${message}
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("System Failure:", error);
    return { success: false };
  }
}