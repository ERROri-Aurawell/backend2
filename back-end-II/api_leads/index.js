import express from 'express';
import { cadastro } from './servico/cadastro_servico.js';
import { validaUsuario } from './servico/validacao/valida.js';



app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;

    const resultado = validaUsuario(nome, email, telefone);
    
    if (resultado.status) {
        await cadastro(nome, email, telefone)
        res.status(202).end();
    } else {
        res.status(400).json(resultado);
    }


})



app.listen(9000, () => {
    const data = new Date();
    console.log("Servidor node iniciado em: " + data);

    // const conexao = await pool.getConnection();
    // console.log(conexao.threadId);  
    // conexao.release();
});