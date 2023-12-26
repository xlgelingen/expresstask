const userClass = require("../models/user");
const userModel = new userClass();
const user = {
    show: async function (req, res, next) {
        if (!res.locals.isLogin) {
            res.redirect('/login')
            return
        }
        try {
            res.locals.users = await userModel.all();
            res.render("user/userShow", res.locals);

        } catch (e) {
            res.locals.error = e;
            res.render("error", res.locals);
        }
    },

    add: async function (req, res, next) {
        const id = req.body.id || null;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password

        if (!name || !email || !password) {
            res.json({ "code": 0, "data": "params empty!" });
            return;
        }

        try {
            const user = await userModel.add({ id, name, email, password });
            res.json({ "code": 200, "data": user })

        } catch (e) {
            res.json({ code: 0, data: e });
        }
    },

    updateName: async function (req, res, next) {
        let id = req.body.id;
        const name = req.body.name;
        if (!name) {
            res.json({ "code": 0, "data": "params empty!" });
            return;
        }

        try {
            const user = await userModel.update(id, { name });
            res.json({ "code": 200, "data": user })

        } catch (e) {
            res.json({ code: 0, data: e });
        }
    },

    updateEmail: async function (req, res, next) {
        let id = req.body.id;
        const email = req.body.email;
        if (!email) {
            res.json({ "code": 0, "data": "params empty!" });
            return;
        }

        try {
            const user = await userModel.update(id, { email });
            res.json({ "code": 200, "data": user })

        } catch (e) {
            res.json({ code: 0, data: e });
        }
    },

    updatePassword: async function (req, res, next) {
        let id = req.body.id;
        const password = req.body.password;
        if (!password) {
            res.json({ "code": 0, "data": "params empty!" });
            return;
        }

        try {
            const user = await userModel.update(id, { password });
            res.json({ "code": 200, "data": user })

        } catch (e) {
            res.json({ code: 0, data: e });
        }
    },

    delete: async function (req, res, next) {
        const id = req.body.id;
        if (!id) {
            res.json({ "code": 0, "data": "params empty!" });
            return;
        }

        try {
            const user = await userModel.delete(id);
            res.json({ "code": 200, "data": user })

        } catch (e) {
            res.json({ code: 0, data: e });
        }
    }


}

module.exports = user;
