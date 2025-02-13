import express from 'express';
import { buscarTodos, buscarPorAno, buscarPorId, calcReajuste, validarParametros } from './servicos/servico.js';

const app = express();

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseFloat(req.query.valor);
    const mesInicial = parseInt(req.query.mesInicial);
    const anoInicial = parseInt(req.query.anoInicial);
    const mesFinal = parseInt(req.query.mesFinal);
    const anoFinal = parseInt(req.query.anoFinal);
    
    const erro = validarParametros({ valor, mesInicial, anoInicial, mesFinal, anoFinal });
    if (erro) {
        return res.status(400).send({ erro });
    }
    const historicoInflacao = buscarTodos();

    const resultado = calcReajuste(valor, mesInicial, anoInicial, mesFinal, anoFinal, historicoInflacao);

    if (resultado.erro) {
        return res.status(400).send(resultado);
    }
    res.json(resultado);
});

app.get('/historicoIPCA', (req, res) => {
    const { ano } = req.query;
    if (ano) {
        const resultado = buscarPorAno(parseInt(ano));
        if (resultado.erro) {
            return res.status(404).send(resultado);
        }
        return res.json(resultado);
    }
    res.json(buscarTodos());
}); 

app.get('/historicoIPCA/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resultado = buscarPorId(id);
    if (resultado.erro) {
        res.status(404).send(resultado);
    } else {
        res.json(resultado);
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 http://localhost:8080');
});
