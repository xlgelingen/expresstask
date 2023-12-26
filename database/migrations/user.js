exports.up = function(knex) {
    return knex.schema
      // 用户
      .createTable('users', function (table) {
        table.increments('id');
        table.string('name', 255);
        table.string('password', 255);
        table.string('email', 255).unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('visited_at').defaultTo(knex.fn.now());
      })
      // 角色
      .createTable('roles', function (table) {
        table.increments('id');
        table.string('name', 255).unique();
      })
      .createTable('user_roles', function (table) {
        table.integer('user_id', 11)
        table.integer('role_id', 11)
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
      // 权限
      .createTable('permission_groups', function (table) {
        table.increments('id');
        table.string('name', 255).unique();
      })
      .createTable('permissions', function (table) {
        table.increments('id');
        table.integer('group_id')
        table.string('slug').unique();
        table.string('name', 255).unique();
      })
      .createTable('role_permissions', function (table) {
        table.integer('role_id', 11)
        table.integer('permission_id', 11)
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable("users")
      .dropTable("roles")
      .dropTable("user_roles")
      .dropTable("permission_groups")
      .dropTable("permissions")
      .dropTable("role_permissions");
  };
  
  exports.config = { transaction: false };