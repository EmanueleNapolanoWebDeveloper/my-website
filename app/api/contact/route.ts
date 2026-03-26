import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, service, budget, message } = body

  if (!name || !email || !message) {
    return Response.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return Response.json({ error: 'Email non valida.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'EN Web Developer <onboarding@resend.dev>',
    to: 'postmaster@enwebdeveloper.it',
    replyTo: email,
    subject: `Nuovo messaggio da ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#fff;border-radius:12px;">
        <h2 style="margin:0 0 24px;font-size:20px;color:#fff;">Nuovo messaggio dal sito</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#888;width:120px;">Nome</td><td style="padding:8px 0;color:#fff;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;color:#fff;"><a href="mailto:${email}" style="color:#6366f1;">${email}</a></td></tr>
          ${service ? `<tr><td style="padding:8px 0;color:#888;">Servizio</td><td style="padding:8px 0;color:#fff;">${service}</td></tr>` : ''}
          ${budget ? `<tr><td style="padding:8px 0;color:#888;">Budget</td><td style="padding:8px 0;color:#fff;">${budget}</td></tr>` : ''}
        </table>
        <div style="margin-top:24px;padding:16px;background:#111;border-radius:8px;border:1px solid #222;">
          <p style="margin:0;color:#ccc;white-space:pre-wrap;">${message}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#444;">Inviato da enwebdeveloper.it</p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return Response.json({ error: 'Errore nell\'invio. Riprova più tardi.' }, { status: 500 })
  }

  return Response.json({ success: true }, { status: 200 })
}
