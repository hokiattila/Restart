import express from 'express'
import { welcome, add } from './hello/index.mjs'

console.log(welcome)
const app = express()

app.get('/',(req, res) => res.send(add(5,5).toString()))

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
