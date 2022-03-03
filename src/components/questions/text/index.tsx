import { decode } from "html-entities";
import './index.css'

interface IQuestionTextProps {
  text: string;
}

const QuestionText = ({ text }: IQuestionTextProps) => {
  return (
    <h1 className="question-text">
    {decode(text)}
  </h1>
  )
}

export default QuestionText;