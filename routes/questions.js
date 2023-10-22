import express from 'express';

import { getQuestions, postQuestion, getQuestion, deleteQuestion, patchQuestion } from "../controllers/questions.js"

const router = express.Router()



router.get("/:id/questions", getQuestions)

router.post("/:id/questions", postQuestion)

router.get("/:id/questions/:id", getQuestion)

router.delete("/:id/questions/:questionId", deleteQuestion)

router.patch("/:id/questions/:questionId", patchQuestion)

export default router;