const post = [{id: 0, text: ''}]

let id = 0

module.exports = {
    //POST
    newComment: (req, res) => {
        const {text} = req.body

        post.push(text)
        id++
        res.status(200).send(post)
    },

    //PUT
    editComment: (req, res) => {
        
    },

    //DELETE
    deleteComment: (req, res) => {
        
    }
}