const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livro = livros.filter(livro => livro.id === id)[0]
    return livro
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosAtualizados = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}