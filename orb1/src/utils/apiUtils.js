export async function fetchQuizFromAI(topic) {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Generate a quiz about ${topic} with 5 questions and 4 options each.`,
        max_tokens: 500,
      }),
    });
    const data = await response.json();
    return data.choices[0].text;
  }
  