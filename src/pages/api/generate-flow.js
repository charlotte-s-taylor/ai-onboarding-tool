import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { funnelSteps, frontendTags } = req.body;

  if (!funnelSteps || !frontendTags) {
    return res.status(400).json({ message: 'Missing input fields' });
  }

  try {
    const prompt = `
You are an expert product onboarding designer.

Given the following user journey and frontend selectors, write a simple, helpful tooltip for each step to guide the user.

Steps:
${funnelSteps.map((step, i) => `${i + 1}. ${step} (selector: ${frontendTags[i]})`).join('\n')}

Respond in JSON format:
[
  {
    "step": "Step name",
    "selector": "CSS selector",
    "tooltip": "Tooltip text"
  },
  ...
]
`;

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful UX designer.' },
        { role: 'user', content: prompt },
      ],
    });

    const jsonBlock = chatResponse.choices[0].message.content;
    const onboardingFlow = JSON.parse(jsonBlock);

    res.status(200).json({ onboardingFlow });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ message: 'Failed to generate tooltips', error: err.message });
  }
}
