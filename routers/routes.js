const router=require('express').Router()
/*const {login,register}=require('../controllers/controller')*/
router.post('/login', login)

/*router.post("/register",register)*/
//post : Veri Gönderme
//get : Vrri Alma
//put : Veri Güncelleme
//patch : Veri Güncelleme
//delete : Veri Silme

module.exports=router
