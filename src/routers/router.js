import {Router} from 'express'

const MiRouter = Router()

MiRouter.get('/',(req,res) => res.render('home.ejs',{'titulo':'HR GTS Suministros - Home'}))
MiRouter.get('/contact',(req,res) => res.render('contact.ejs',{'titulo':'HR GTS Suministros - Contact'}))
MiRouter.get('/about',(req,res) => res.render('about.ejs',{'titulo':'HR GTS Suministros - About'}))

export default MiRouter