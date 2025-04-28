export async function fetchQuizFromAI(topic) {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `,
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
  
