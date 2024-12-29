const { Router } = require("express")
const { getLivros, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.post('/', postLivro)

router.patch('/', patchLivro)

router.delete('/', deleteLivro)

module.exports = router