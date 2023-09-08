export default async function runCompletion(inputMessage?: string) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "Generate 5 app ideas as an array of json with the keys 'name', 'description' and 'category'.",
          },
        ],

        max_tokens: 4000,
        temperature: 0,
      }),
    });

    const aiAnswer = await response.json();
    // console.log(aiAnswer.choices[0].message.content);
    return JSON.parse(aiAnswer.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}
