const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function(req,res,next){
    res.locals.isLogin=false;
    res.locals.userInfo={};
    let token = req.cookies.jwt_token;
    if(token){
        // res.locals.isLogin=true;
        JWT.verify(token, JWT_SECRET, function(err, decoded) {
            if(!err) {
              res.locals.isLogin = true;
              res.locals.userInfo = {
                id: decoded.user_id
              }
            }
          });
        next();
    }else{
        next()
    }
}