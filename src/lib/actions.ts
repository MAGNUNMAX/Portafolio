 "use server";
import nodemailer from "nodemailer";
import { z } from "zod";

export interface ContactFormState {
  success: boolean;
  message: string;
}

// Tu schema de validación (si no lo tienes aquí)
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactForm(
  formData: unknown
): Promise<ContactFormState> {
  const parsedData = contactSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }

  try {
    const { name, email, message } = parsedData.data;

    // Configura el transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Cambia si no usas Gmail
      port: 465,
      secure: true, // true para 465
      auth: {
        user: process.env.EMAIL_USER, // tu correo
        pass: process.env.EMAIL_PASS, // contraseña de app
      },
    });

    // Configura el correo que recibirás
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // de quien envía
      to: process.env.EMAIL_TO, // tu correo donde recibirás el mensaje
      subject: "Nuevo mensaje desde tu web",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br/>${message}</p>`,
    });

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "There was a problem sending your message.",
    };
  }
}








/* "use server";

import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function handleContactForm(
  formData: unknown
): Promise<ContactFormState> {
  const parsedData = contactSchema.safeParse(formData);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it to the console.
  console.log("New contact form submission:");
  console.log(parsedData.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
  };
}
 */