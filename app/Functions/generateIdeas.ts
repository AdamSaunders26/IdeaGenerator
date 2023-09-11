import runCompletion from "./openai";

export default function generateIdeas(
  level: string,
  focus: string,
  feature: string,
  setCurrentIdeas: React.Dispatch<React.SetStateAction<Idea[] | null>>
) {
  runCompletion(level, focus, feature)
    .then((appIdeas) => {
      setCurrentIdeas(appIdeas);
    })
    .catch((err) => {
      console.log(err);
    });
}
