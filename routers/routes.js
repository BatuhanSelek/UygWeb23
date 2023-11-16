const router=require('express').Router()
const {login}=require('../controllers/controller')
const {register}=require('../controllers/controller')
router.post('/login', login)
router.post('/register', register)

/*router.post("/register",register)*/
//post : Veri Gönderme
//get : Veri Alma
//put : Veri Güncelleme
//patch : Veri Güncelleme
//delete : Veri Silme

module.exports=router
