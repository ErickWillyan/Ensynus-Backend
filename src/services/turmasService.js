const sql = require("../models/connection");

const insertTurmaService = async (
  tur_areaConhecimento,
  tur_descricao,
  tur_nome,
  tur_duracao,
  tur_modalidade,
  fk_idProfessor
) => {
  try {
    const [result] = await sql.query(`CALL inserir_turma(?, ?, ?, ?, ?, ?)`, [
      tur_areaConhecimento,
      tur_descricao,
      tur_nome,
      tur_duracao,
      tur_modalidade,
      fk_idProfessor,
    ]);

    return result;
  } catch (error) {
    return { error: "Erro ao cadastrar turma", message: error.message };
  }
};

const getTurmaPorProfessorService = async (idProfessor) => {
  try {
    const [result] = await sql.query(
      `SELECT * FROM ensynus.turma 
WHERE turma.fk_idProfessor = ?`,
      [idProfessor]
    );

    return result;
  } catch (error) {
    return { error: "Erro ao selecionar turma", message: error.message };
  }
};

module.exports = {
  insertTurmaService,
  getTurmaPorProfessorService,
};
