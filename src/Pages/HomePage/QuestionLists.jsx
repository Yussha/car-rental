import SectionTitle from "../../Components/SectionTitle"
import SectionSubtitle from "../../Components/SectionSubtitle"

import { questionsLists } from "../../Data/questions"

import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

// redux
import { useSelector, useDispatch } from 'react-redux'
import { showAnswer } from "../../ReduxStore/questionListsSlice";

export default function QuestionLists() {
    const questionId = useSelector(state => state.questionsListsReducer.questionId)
    const dispatch = useDispatch();

    const questions1 = questionsLists.slice(0, 3)
    const questions2 = questionsLists.slice(3)

    const handleShowAnswer = (id) => {
        dispatch(showAnswer(id))
    }

    return (
        <section className="h-auto pb-24 h-auto pl-3 pr-3 xl:pl-20 xl:pr-20">
            <div className="flex flex-col items-center gap-y-2">
                <SectionSubtitle>Do You Have</SectionSubtitle>
                <SectionTitle>Any Questions?</SectionTitle>
            </div>

            <div className="mt-10 flex flex-col gap-y-2 sm:pl-8 sm:pr-8 md:grid md:grid-cols-2 md:gap-x-8">
                <ul className="w-fit h-fit flex flex-col gap-y-2">
                    {questions1.map(question => (

                        <li key={question.id}>
                            <div style={{ borderBottom: "1px solid #676767" }} className="flex justify-between items-center pb-4">
                                <h3 className="text-lg pr-10">{question.question}</h3>
                                <button onClick={() => handleShowAnswer(question.id)} style={{ backgroundColor: "#fd7e14" }} className="p-2 rounded-sm">
                                    {questionId == question.id ? <MdKeyboardArrowUp style={{ color: "#fff" }} /> : <IoIosArrowDown style={{ color: "#fff" }} />}
                                </button>
                            </div>
                            <div style={{
                                transition: '.3s ease-in-out',
                                height: questionId === question.id ? '220px' : '0',
                                margin: questionId === question.id ? '16px 0' : '0'
                            }}
                                className="overflow-hidden">
                                <p className="leading-6">
                                    {question.answer}
                                </p>
                            </div>
                        </li>

                    ))}
                </ul>

                <ul className="w-fit h-fit flex flex-col gap-y-2">
                    {questions2.map(question => (

                        <li key={question.id}>
                            <div style={{ borderBottom: "1px solid #676767" }} className="flex justify-between items-center pb-4">
                                <h3 className="text-lg pr-10">{question.question}</h3>
                                <button onClick={() => handleShowAnswer(question.id)} style={{ backgroundColor: "#fd7e14" }} className="p-2 rounded-sm">
                                    {questionId == question.id ? <MdKeyboardArrowUp style={{ color: "#fff" }} /> : <IoIosArrowDown style={{ color: "#fff" }} />}
                                </button>
                            </div>
                            <div style={{
                                transition: '.3s ease-in-out',
                                height: questionId === question.id ? '220px' : '0',
                                margin: questionId === question.id ? '16px 0' : '0'
                            }}
                                className="overflow-hidden">
                                <p className="leading-6">
                                    {question.answer}
                                </p>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </section>
    )
}