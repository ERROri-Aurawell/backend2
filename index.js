import express from "express";
import { buscarUfs, buscarUfPorId, buscarUfPorNome } from "./serviços/serviços.js";

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else{
        res.status(404).send({"erro": "nenhuma UF encontrada"});
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);

    if (uf){
        res.json(uf) ;
    }else if(isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({"Erro": "Requisição inválida"});
    }else{
        res.status(404).send({"Erro": "Uf não encontrada"})
    }


});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});


