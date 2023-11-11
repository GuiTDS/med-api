import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error('erro de conexao', erro);
});

connection.once("open", () => {
    console.log('conexao feita com sucesso!');
})

const app = express();
routes(app);


export default app;