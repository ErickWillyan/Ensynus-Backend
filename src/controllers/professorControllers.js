const professorServices = require("../services/professorServices");

const insertProfessorController = async (req, res) => {
  const { pro_nome, pro_email, pro_senha, pro_dataNasc } = req.body;
  try {
    const result = await professorServices.insertProfessorService(
      pro_nome,
      pro_email,
      pro_senha,
      pro_dataNasc
    );
    if (result.error) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (error) {
    console.error("Error inserting professor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginProfessorController = async (req, res) => {
  const { pro_email, pro_senha } = req.body;
  try {
    const result = await professorServices.loginProfessorService(
      pro_email,
      pro_senha
    );
    if (result.error) {
      return res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error logging in professor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  insertProfessorController,
  loginProfessorController,
};
