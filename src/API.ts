import {shuffleArray} from './util';


//defined the type based on the API's return
export type Question = {
    category:string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]
}

//setting the type to have both corecct_answer and incorrect_answer in one array
export type QuestionState = Question & {answers:string[]}

export enum Difficulty {
    EASY ="easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async(amount:number,difficulty:Difficulty)=>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=27`
    // const data ＝　await(await fetch(endpoint)).json();
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log("data",data)
    
    //put answers in one array
return data.results.map((question:Question)=>(
    {
        ...question,
        // answers:shuffleArray([...question.incorrect_answers,question.correct_answer])
        answers:[...question.incorrect_answers,question.correct_answer]
    })
    
)


}