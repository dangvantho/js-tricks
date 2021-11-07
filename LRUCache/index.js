const express = require('express')
const LRUCache = require('./LRUCache')

const app = express()

app.use(LRUCache(3))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.post('/', (req, res) => {
    try {
        const { key, value } = req.body
        req.memo.put(key, value)
        res.send('Create success')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/items', (req, res) => {
    try {
        const data = req.memo.items();
        res.send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/', (req, res) => {
    try {
        const { key } = req.query
        const value = req.memo.get(key)
        const data = req.memo.items()
        res.send(`Sau khi lấy giá trị ${value} thì cache mới là ${data}`)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(5000, () => {
    console.log('App is ruuning on port 5000')
})
