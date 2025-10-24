const express = require('express');
const app = express();
const port = 3000;
const conn = require('./db/conn');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

app.use('/api/products', productRoutes);

conn.sync().then(() => {
    app.listen(port);
    console.log('Servidor rodando na porta 3000');
}).catch((err) => {
    console.log(`Erro ao conectar ao banco de dados: ${err}`);
});