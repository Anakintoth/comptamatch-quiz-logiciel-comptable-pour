import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@groq/client';

const client = createClient({
  url: 'https://api.groq.com',
  apiKey: process.env.GROQ_API_KEY,
});

const model = 'llama-3.3-70b-versatile';

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await client.generate({
      model,
      prompt,
      max_tokens: 2048,
      temperature: 0.7,
      top_p: 0.95,
      stream: true,
    });

    res.status(200);
    res.setHeader('Content-Type', 'application/json');

    for await (const chunk of response) {
      res.write(JSON.stringify(chunk) + '\n');
    }

    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}