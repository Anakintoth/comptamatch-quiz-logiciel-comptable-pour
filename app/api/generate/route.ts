import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const model = 'llama-3.3-70b-versatile';

export async function POST(req: NextRequest) {
  let prompt: string;

  try {
    const body = await req.json();
    prompt = body.prompt;
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 });
  }

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Le champ prompt est requis' }, { status: 400 });
  }

  try {
    const stream = await groq.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content:
            "Tu es un expert en logiciels de comptabilité pour les entreprises françaises. Tu aides les utilisateurs à trouver le logiciel comptable le mieux adapté à leurs besoins en analysant leurs réponses au quiz. Réponds toujours en français, de façon précise et structurée.",
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 2048,
      temperature: 0.7,
      top_p: 0.95,
      stream: true,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content ?? '';
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Groq API error:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
