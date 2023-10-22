
import { Questions } from "../model/model.js"


export const getQuestions = async (req, res) => {
    try {
        const data = await Questions.find({ parentQuizId: req.params.id });
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const postQuestion = async (req, res) => {
    const data = new Questions({
        question: req.body.question,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer,
        explanation: req.body.explanation,
        parentQuizId: req.params.id
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const getQuestion = async (req, res) => {
    try {
        const data = await Questions.findOne({ parentQuizId: req.params.id });
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteQuestion = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Questions.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const patchQuestion = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true }

        const result = await Questions.findByIdAndUpdate(id, updatedData, options)

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}