const { getTodosLivros } = require("../servicos/livro")

function getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
        res.send("Usando o método post")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro (req, res) {
    try {
        res.send("Usando o método patch")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro (req, res) {
    try {
        res.send("Usando o método delete")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    postLivro,
    patchLivro,
    deleteLivro
}