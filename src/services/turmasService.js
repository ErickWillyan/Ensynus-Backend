const sql = require("../models/connection");

const insertTurmaService = async (
  tur_nome,
  tur_areaConhecimento,
  tur_descricao,
  tur_duracao,
  tur_modalidade,
  fk_idProfessor
) => {
  try {
    const [result] = await sql.query(
      `INSERT INTO turma 
        (tur_nome, tur_areaConhecimento, tur_descricao, tur_duracao, tur_modalidade, fk_idProfessor)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        tur_nome,
        tur_areaConhecimento,
        tur_descricao,
        tur_duracao,
        tur_modalidade,
        fk_idProfessor,
      ]
    );

    return result;
  } catch (error) {
    return { error: "Erro ao cadastrar turma", message: error.message };
  }
};

module.exports = {
  insertTurmaService,
};
