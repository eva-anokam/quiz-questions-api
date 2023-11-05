import { QuizSchema } from "../model/model.js"
import { v4 as uuidv4 } from "uuid";

export const postQuiz = async (req, res) => {
    const quizId = uuidv4()
    const data = new QuizSchema({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        quizId: quizId
    })
    try {
        const dataToSave = await data.save()
        const newDataResponse = {
            title: dataToSave.title,
            category: dataToSave.category,
            description: dataToSave.description,
            quizId: dataToSave.quizId
        }
        res.status(200).json(newDataResponse)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getQuiz = async (req, res) => {
    try {
        const data = await QuizSchema.findOne({
            quizId: req.params.id
        })
        const dataResponse = {
            title: data.title,
            category: data.category,
            description: data.description,
            quizId: data.quizId
        }
        res.json(dataResponse)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const listAllQuizCategory = async (req, res) => {
    try {
        const data = await QuizSchema.find();
        const distinctCategories = [...new Set(data.map(el => el.category))];
        res.json(distinctCategories);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getQuizByCategory = async (req, res) => {
    try {
        const data = await QuizSchema.find({
            category: req.params.category
        })
        const dataResponse = data.map(element => {
            return {
                title: element.title,
                category: element.category,
                description: element.description,
                quizId: element.quizId
            }

        })

        res.json(dataResponse)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}