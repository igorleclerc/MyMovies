'use strict'

module.exports = function(app) {
    const controller = require('../controller/users.controller');

    app.route('/register')
        .post(controller.register)

    app.route('/login')
        .post(controller.login)

    app.route('/users')
        .get(controller.users)

    app.route('/movies')
        .get(controller.movies)
}