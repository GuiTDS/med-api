import express from 'express';
import connectDatabase from './config/dbConnect.js';

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error('erro de conexao', erro);
});

connection.once("open", () => {
    console.log('conexao feita com sucesso!');
})

const app = express();



export default app;