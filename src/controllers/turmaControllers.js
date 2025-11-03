const turmaService = require("../services/turmasService");

const insertTurmaController = async (req, res) => {
  const {
    tur_nome,
    tur_areaConhecimento,
    tur_descricao,
    tur_duracao,
    tur_modalidade,
    fk_idProfessor,
  } = req.body;

  try {
    const result = await turmaService.insertTurmaService(
      tur_nome,
      tur_areaConhecimento,
      tur_descricao,
      tur_duracao,
      tur_modalidade,
      fk_idProfessor
    );
    if (result.error) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (error) {
    console.error("Error inserting turma:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  insertTurmaController,
};
