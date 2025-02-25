const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');

// Generate a random quiz
router.get('/generate', quizController.generateQuiz);

module.exports = router;
