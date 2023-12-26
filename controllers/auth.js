const UserModel = require('./../models/user.js');
const User = new UserModel();
const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


const authController = {
    login: async function (req, res, next) {
        let email = req.body.email;
        let password = req.body.password;
        if (!email || !password) {
            res.json({ code: 0, data: 'params empty!' });
            return
        }

        try {
            const users = await User.select({ email, password });
            const user = users[0];
            if (user) {
                let token = JWT.sign({ user_id: user.id }, JWT_SECRET, {expiresIn: "30d"});
                res.cookie('jwt_token', token, { maxAge: 30 * 24 * 60 * 60, httpOnly: true});
                res.json({ code: 200, message: '登录成功！', data: { token: token } });
            } else{
                res.json({ code: 0, data: { msg: '登录失败，没有此用户！' } })
            }
        } catch (e) {
            res.json({ code: 0, data: e })
        }
    },
    // 渲染登录页面的模版
    loginshow: async function (req, res, next) {
        if (res.locals.isLogin) {
            res.redirect('/user')
            return
        }
        res.render('login/login', res.locals)
    }
}

module.exports = authController;
