const sql = require("../models/connection");

const insertAulaService = async (
  aul_nome,
  aul_descricao,
  aul_data,
  fk_idTurma
) => {
  try {
    const [result] = await sql.query(
      `
      INSERT INTO Aula (aul_nome, aul_descricao, aul_data, fk_idTurma)
      VALUES (?, ?, ?, ?)
      `,
      [aul_nome, aul_descricao, aul_data, fk_idTurma]
    );

    return {
      success: true,
      message: "Aula cadastrada com sucesso!",
      insertId: result.insertId,
    };
  } catch (error) {
    return { error: "Erro ao cadastrar aula", message: error.message };
  }
};

const getAulasByTurmaService = async (fk_idTurma) => {
  try {
    const [rows] = await sql.query(
      `
      SELECT aul_id, aul_nome, aul_descricao, aul_data
      FROM Aula
      WHERE fk_idTurma = ?
      ORDER BY aul_data ASC
      `,
      [fk_idTurma]
    );

    return rows;
  } catch (error) {
    return { error: "Erro ao buscar aulas", message: error.message };
  }
};

module.exports = {
  insertAulaService,
  getAulasByTurmaService,
};
