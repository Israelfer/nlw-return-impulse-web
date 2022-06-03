import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContetStep } from "./steps/FeedbaclContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um pensamento"
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : !feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContetStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
          onFeedbackSent={() => setFeedbackSent(true)}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://israelbatista.vercel.app/"
          target="_blank"
        >
          Israel Batista
        </a>
      </footer>
    </div>
  );
}
