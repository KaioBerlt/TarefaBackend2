const express = require("express");

const app = express();

const usuario = require("./router/user.router");

const port = 3000;

app.use(express.json());

app.use("/usuario", usuario);


app.get("/", (req,res) => {
    res.send("Inicio");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);

});
