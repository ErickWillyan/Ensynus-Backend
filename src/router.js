const express = require("express");
const professorControllers = require("./controllers/professorControllers");
const turmaControllers = require("./controllers/turmaControllers");
const router = express.Router();
const sql = require("./models/connection");

router.post(
  "/professor/insertProfessor",
  professorControllers.insertProfessorController
);

router.post(
  "/professor/loginProfessor",
  professorControllers.loginProfessorController
);

router.post("/turma/insertTurma", turmaControllers.insertTurmaController);

router.get("/getProfessor", async (req, res) => {
  const [result] = await sql.query("select * from professor");
  console.log("Passe");
  res.status(201).json(result);
});

module.exports = router;
