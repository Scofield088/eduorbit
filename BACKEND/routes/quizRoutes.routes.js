const express = require('express');
const { getQuizzes, generateQuiz, createQuiz } = require('../controllers/quizController');
const validateQuiz = require('../middleware/validateQuiz');

const router = express.Router();

router.get('/', getQuizzes);
router.get('/generate', generateQuiz);
router.post('/', validateQuiz, createQuiz);

module.exports = router;
