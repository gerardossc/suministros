import express from 'express'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import MiRouter from './src/routers/router.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('view engine','ejs')

app.set('views',join(__dirname,'src/views'))

app.use(MiRouter)

app.use(express.static(join(__dirname,'src/public')))

app.listen(3000)
console.log("Servidor en puerto ", 3000)


