exports.seed = function (knex) {
    return Promise.all([
        knex('users').insert([
            { name:'11', email:'11@', password: 111 },
            { name:'22', email:'22@', password: 222 },
            { name:'33', email:'33@', password: 333},
            { name:'44', email:'44@', password: 444 },
            { name:'55', email:'55@', password: 111 },
        ]),

        knex('roles').insert([
            { id: 1, name: '管理员' },
        ]),

        knex('permission_groups').insert([
            { id: 1, name: '通用管理' },
            { id: 2, name: '设置' },
        ]),

        knex('permissions').insert([
            { id: 1, group_id: 1, slug: 'carousel-manager', name: '轮播图管理' },
            { id: 2, group_id: 2, slug: 'admin-manager', name: '管理员' },
        ]),

        knex('role_permissions').insert([
            { role_id: 1, permission_id: 1 },
            { role_id: 1, permission_id: 2 },
        ]),

        knex('user_roles').insert([
            { role_id: 1, user_id: 1 },
        ])
    ])
};
