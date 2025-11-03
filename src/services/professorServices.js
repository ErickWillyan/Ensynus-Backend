const sql = require("../models/connection");

const insertProfessorService = async (
  pro_nome,
  pro_email,
  pro_senha,
  pro_dataNasc
) => {
  try {
    const [result] = await sql.query(
      "INSERT INTO professor (pro_nome, pro_email, pro_senha, pro_dataNasc) VALUES (?, ?, ?, ?)",
      [pro_nome, pro_email, pro_senha, pro_dataNasc]
    );
    return result;
  } catch (error) {
    return { error: "Erro ao cadastrar professor", message: error.message };
  }
};

const loginProfessorService = async (pro_email, pro_senha) => {
  try {
    const [rows] = await sql.query(
      "SELECT pro_id, pro_nome FROM professor WHERE pro_email = ? AND pro_senha = ?",
      [pro_email, pro_senha]
    );

    if (rows.length === 0) {
      return { error: "Login inválido" };
    }

    return rows[0];
  } catch (error) {
    return { error: "Erro ao realizar login", message: error.message };
  }
};

module.exports = {
  insertProfessorService,
  loginProfessorService,
};
