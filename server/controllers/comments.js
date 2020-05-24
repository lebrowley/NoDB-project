const comment = [{id: 0, text: 'This book is great'}, {id: 1, text: 'One of the best books of all time!'}]

let id = 2

module.exports = {
    //GET
    getComment: (req, res) => {
        res.status(200).send(comment)
    },

    //POST
    newComment: (req, res) => {
        const {text} = req.body
        const createNewComment = {id, text}
        comment.push(createNewComment)
        id++
        res.status(200).send(comment)
    },

    //PUT
    editComment: (req, res) => {
        const {id} = req.params

        const index = comment.findIndex((element) => element.id === +id)

        if(index === -1) {
            return res.status(404).send('Comment not found')
        }

        comment[index].text = req.body.text

        res.status(200).send(comment)
    },

    //DELETE
    deleteComment: (req, res) => {
        const {id} = req.params

        const index = comment.findIndex((element) => element.id === +id)

        if(index === -1) {
            return res.status(404).send('Comment not found')
        }

        comment.splice(index, 1)

        res.status(200).send(comment)
    }
}