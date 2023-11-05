import express from 'express';

import { getQuiz, postQuiz, getQuizByCategory, listAllQuizCategory } from "../controllers/quiz.js"

const router = express.Router()

router.post("", postQuiz)

router.get("/:id", getQuiz)
router.get("", listAllQuizCategory)
router.get("/categories/:category", getQuizByCategory)


// router.patch("/quiz/:id", updateQuiz)

// router.delete("/quiz/:id", deleteQuiz)

export default router;