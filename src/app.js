import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import handler404 from './middlewares/handler404.js';

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error('erro de conexao', erro);
});

connection.once("open", () => {
    console.log('conexao feita com sucesso!');
})

const app = express();
routes(app);
app.use(handler404);
app.use(errorHandler);


export default app;