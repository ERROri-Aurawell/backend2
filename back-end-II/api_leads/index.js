import express from 'express';
import cors from 'cors';
import { cadastro } from './servico/cadastro_servico.js';
import { validaUsuario } from './servico/validacao/valida.js';

const app = express();
app.use(cors());

app.use(express.json());

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const resultado = validaUsuario(nome, email, telefone);
    try {
        await cadastro(nome, email, telefone)
        res.status(202).end();

    } catch (error) {
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