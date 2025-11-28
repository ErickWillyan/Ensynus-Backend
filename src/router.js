const express = require("express");
const professorControllers = require("./controllers/professorControllers");
const turmaControllers = require("./controllers/turmaControllers");
const aulasControllers = require("./controllers/aulasControllers");
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

router.get(
  "/turma/getTurmaPorProfessor/:idProfessor",
  turmaControllers.getTurmaPorProfessorController
);

router.post("/aulas/insertAula", aulasControllers.insertAulaController);
router.get(
  "/aulas/turma/:fk_idTurma",
  aulasControllers.getAulasByTurmaController
);

router.get("/getProfessor", async (req, res) => {
  const [result] = await sql.query("select * from professor");
  console.log("Passe");
  res.status(201).json(result);
});

module.exports = router;
