import express from "express";
import { retornaMedic, retonraPorNome, retornaPorespecialidade } from "./servico/retornaMedico_servico.js";
const app = express();

app.get('/medicos', async (req, res) => {
    let medicos;
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;

    if (typeof nome === 'undefined' && typeof especialidade === 'undefined') {
        medicos = await retornaMedic();
    } else if (typeof nome === 'undefined') {
        medicos = await retornaPorespecialidade(especialidade)
    } else if (typeof especialidade === 'undefined') {
        medicos = await retonraPorNome(nome);
    }
    if (medicos.length > 0) {
        res.json(medicos);
    } else {
        res.status(404).json({mensagem: "Nenhum medico encontrado"})
    }
})

app.listen(9000, () => {
    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
})