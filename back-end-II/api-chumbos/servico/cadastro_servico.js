import pool  from "./conexao.js";

export async function cadastro(nome, email, telefone) {
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('INSERT INTO banco_de_dados (nome, email, telefone) VALUES (?,?,?)', [nome, email, telefone]);
    console.log(resposta);
    conexao.release();
}