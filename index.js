import express from 'express';
import sequelize from './config/database.js';

import rotas from './router/recRotas.js';

const app = express();
app.use(express.json());

app.use(rotas);

sequelize.authenticate()
    .then(() => {
        console.log('conectado com o banco de dados,');
    })
    .catch(fail => {
        console.error('não conectado com o banco de dados:', fail);
    });

sequelize.sync()
    .then(() => {
        console.log('modelos sincronizados com o bd.');
    })
    .catch(fail => {
        console.error('não sincronizado com o bd:', fail);
    });

app.listen(9000, () => {
    console.log('servidor rodando,');
});
