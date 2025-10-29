import { Resend } from "resend";

interface EmailProps {
    to: string;
    from: string;
    url: string
}

export async function sendVerificationEmail({to,from,url}: EmailProps) {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
        to,
        from,
        subject: "Verify your email",
        html: `<strong>Please verify your email by clicking <a href="${url}">here</a>.</strong>`,
    });
}