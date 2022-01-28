const knex = require('knex');


const connected_knex = knex({
    client: "better-sqlite",
    connection: {
        filename: "./data.sqlite3"
    }
})

module.exports = connected_knex;