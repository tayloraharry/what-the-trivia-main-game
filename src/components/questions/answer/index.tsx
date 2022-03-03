import { decode } from "html-entities";
import "./index.css";

interface IQuestionAnswerProps {
  index: number;
  option: string;
  text: string;
}

const QuestionAnswer = ({ index, option, text }: IQuestionAnswerProps) => {
  return (
    <div className="question-answer__container">
      <h1 key={index} className="question-answer">
        <span className="question-answer__option">{option}</span>
        <span className="question-answer__text">{decode(text)}</span>
      </h1>
    </div>
  );
};

export default QuestionAnswer;
