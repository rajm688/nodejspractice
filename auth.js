import Jwt from "jsonwebtoken"
export const auth = (req,res,next)=>{
    try{
    const token = req.header("x-auth-token")
    Jwt.verify(token,process.env.SECRET_KEY)
    console.log(token)
    next()
}
catch(err){
    res.send({err:err.message})
}
}