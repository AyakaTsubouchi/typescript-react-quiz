import React from 'react'
//types
import { AnswerObject } from '../App'

import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void; //void: it doesn't have return. 
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

//If we want to specify props, we do that inside of angle brackets
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions, }) => {
    return (
        <>
            <Wrapper>
                <p className="number">
                    Question:{questionNr}/{totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: question }}></p>
                <div>
                    {answers.map((answer) => (
                        <ButtonWrapper
                        key={answer}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button 

                                disabled={!!userAnswer} value={answer}
                                onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>
            </Wrapper>
        </>
    )
}

export default QuestionCard