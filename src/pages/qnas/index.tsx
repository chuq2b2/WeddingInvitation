import { qnaDetails } from "@/components/details/QuestionAndAnswerDetails";
import QuestionAndAnswer from "@/components/QuestionAndAnswer";
export default function QnAs() {
  return (
    <>
      <div
        className="justify-center flex flex-col items-center mb-20"
      >
        <h1 className="fraunces font-extrabold lg:text-5xl text-3xl my-10 text-[#A0AC60]">
          Questions and Answers
        </h1>
        <QuestionAndAnswer qna={qnaDetails.number}/>
      </div>
    </>
  );
}
