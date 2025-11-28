const aulaService = require("../services/aulasServices");

const insertAulaController = async (req, res) => {
  const { aul_nome, aul_descricao, aul_data, fk_idTurma } = req.body;

  try {
    const result = await aulaService.insertAulaService(
      aul_nome,
      aul_descricao,
      aul_data,
      fk_idTurma
    );

    if (result.error) {
      return res.status(400).json(result);
    }

    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao inserir aula:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getAulasByTurmaController = async (req, res) => {
  const { fk_idTurma } = req.params;

  try {
    const result = await aulaService.getAulasByTurmaService(fk_idTurma);

    if (result.error) {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao buscar aulas:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

module.exports = {
  insertAulaController,
  getAulasByTurmaController,
};
