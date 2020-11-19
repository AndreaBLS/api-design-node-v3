import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get("/me", (req,res) => {
    res.send({message: "router.get/me"})
})
app.use("/api", router)

router.route()
const routes = ["get /cat", "get /cat/:id"]
const log1 = (req, res, next) => {
    console.log("logging2")
    next()
}

const log = (req, res, next) => {
    console.log("logging")
    next()
}


app.get("/data", [log, log1], (req, res) => {
    res.send({ data: [1, 2, 3] })
})
app.post("/data", (req, res) => {
    console.log(req.body)
    res.send({ ok: true })
})

/* app.put("/data", (req, res) => {

}) */
/* app.delete( (req, res) => {
    
}) */



const port = 3000
export const start = () => {
    app.listen(port, () => {
        console.log(`server is running on port  ${port}`)
    })
}