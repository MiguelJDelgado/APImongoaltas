import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res)  => {
    const index = buscaLivroPorId(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("livro excluído com sucesso");
});

export default app;

//