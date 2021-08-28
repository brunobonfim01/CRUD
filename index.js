const express = require('express');

const server = express();

server.use(express.json());

const equipamentos = ['ONU','Roteador','STB','Switch',];
// retorna um equipamento
server.get('/equipamentos/:index',(req , res) => {
    const { index } = req.params;


    return res.json(equipamentos[index]);
});

//retornar todos os equipamentos
server.get('/equipamentos',(req ,res) =>{
    return res.jason(equipamentos);

});

//criar um novo equipamento
server.post('/equipmentos',(req ,res) =>{
    const {name} = req.body;
    equipamentos.push(name);

    return res.json(equipamentos);
});

//atualizar um equipamento
server.put('/equipamentos/:index', (req ,res) => {
    const { index } = req.paramas;
    const { name } = req.body;

    equipamentos[index] = name;

    return res.json(equipamentos);

});

//deletar um equipamento
server.delete('/equipamentos/:index', (req , res) => {
    const{index} =req.params;

    equipamentos.splice(index ,1);
    return res.json({ message: "o equipamento foi deletado"});
});


server.listen(3000);