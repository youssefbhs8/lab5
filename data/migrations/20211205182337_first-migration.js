
// exports.up = function(knex) {
  
// };

// exports.down = function(knex) {
  
// };

exports.up = (knex) => { return knex.schema
    .createTable('profiles', function (table) { table.increments('profile_id'); table.string('name', 128).notNullable();
    }); };
    exports.down = (knex) => {
    return knex.schema.dropTableIfExists('profiles');
    };