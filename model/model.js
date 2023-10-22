import mongoose from "mongoose";


const quizSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    img: {
        type: String
    },
    deleted: {
        type: Boolean, 
        default: false
    }, 
    quizId: {
        required: true,
        type: String
    }
})

const questionSchema = new mongoose.Schema({
    question: {
        required: true,
        type: String
    },
    options: {
        required: true,
        type: Array
    },
    correctAnswer: {
        required: true,
        type: String
    }, 
    explanation: {
        required: true,
        type: String
    },
    parentQuizId: {
        required: true,
        type: String
    }
})

export const Questions = mongoose.model('Questions', questionSchema);

export const QuizSchema = mongoose.model('Quiz', quizSchema);

