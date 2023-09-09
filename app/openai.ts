export default async function runCompletion(level: string, focus: string) {
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
            content: `Generate 5 app ideas that an ${level.toLowerCase()} level coder could make, with a focus on ${focus.toLowerCase()}. Your answer should be an array of json with the keys 'name','description','category','features' which is an array of strings, and 'icon' which is the name of an icon that matches the category from react-native-vector-icons but only using the AntDesign icons.`,
          },
        ],

        max_tokens: 4000,
        temperature: 0,
      }),
    });

    const aiAnswer = await response.json();
    return JSON.parse(aiAnswer.choices[0].message.content);
  } catch (error) {
    console.error("openai", error);
  }
}
