import express from 'express';
import { cadastro } from './servico/cadastro_servico.js';
import { validação } from './servico/valida.js';



app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.params;

    await validação(nome, email, telefone);

    res.status(204).end();
})