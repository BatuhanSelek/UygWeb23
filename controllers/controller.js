const dbConn = require("../db/mysql_connect")
const bcrypt = require("bcrypt")
const login=async(req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const sifre=req.body.sifre
    dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=?",
    [kullanici_adi],(error,results)=>{
        if(results.length>0){
            const comparePassword=bcrypt.compare(sifre,results[0].sifre)
            if(comparePassword){
                return res.status(203).json({
                    success:true,
                    message:"Kullanıcı Girişi Başarılı"
                })
            }else{
                return res.status(203).json({
                    success:false,
                    message:"Kullanıcı veya Şifre Uyumsuz"
                })
            }
        }else{
            return res.status(203).json({
                success:false,
                message:"Kullanıcı Girişi Başarısız"
            })
        }
    })
}

        




const register = async (req, res) => {
    const kullanici_adi = req.body.kullanici_adi
    const sifre = await bcrypt.hash(req.body.sifre, 10)
    const eposta = req.body.eposta
    const adi = req.body.adi
    const soyadi = rq.body.soyadi
    const tel = req.body.tel
    const cinsiyet = req.body.cinsiyet
    dbConn.query("SELECT * FROM admin WHERE kullanici_adi=?", kullanici_adi, (err, result) => {
        if (result.length > 0) {
            return res.status(409).send({ message: "Bu Kullanıcı Adı Zaten Mevcut!" })
        } else {
            dbConn.query("INSERT INTO admin (kullanici_adi,sifre,eposta,adi,soyadi,tel,cinsiyet) VALUES (?,?,?,?,?,?,?)", [kullanici_adi, sifre, eposta, adi, soyadi, tel, cinsiyet], (err, result) => {
                return res.status(201).json({
                    success: true,
                    message: "Kayıt Başarılı"
                })
            })

        }

    })

}

module.exports = { login, register }