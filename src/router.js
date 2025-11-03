const express = require("express");
const professorControllers = require("./controllers/professorControllers");
const turmaControllers = require("./controllers/turmaControllers");
const router = express.Router();

router.post(
  "/professor/insertProfessor",
  professorControllers.insertProfessorController
);

router.post(
  "/professor/loginProfessor",
  professorControllers.loginProfessorController
);

router.post("/turma/insertTurma", turmaControllers.insertTurmaController);

module.exports = router;
