var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos',function(req, res){

        //seed database
        var starterTodos = [
            {
                username: 'Test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });

    });

}