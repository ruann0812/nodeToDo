var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');


module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos',function(req, res){
        console.log('-->', JSON.stringify(res));
        //res.send(JSON.stringify(res));
    });

    app.get('/api/todos/:uname', function(req, res){
        Todos.find({ username: req.params.uname }, function (err, todos){
            if (err) throw err; 

            res.send(todos);

        });
    });

    app.get('/api/todo/:id', function(req, res){
        Todos.findById({ _id: req.params.id }, function(err, todo){
            if(err) throw err;

            res.send(todo);
        });
    });


    app.post('/api/todo', function(req, res){

        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                username: req.body.username,
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttachment: req.body.hasAttachment
            }, function(err, todo){
                if (err) throw err;

                res.send('Success update!');
            });
        }
        else{
            var newTodo = Todos ({
                username: 'Test_1',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function(err){
                if (err) throw err;
                
                res.send('Success save!');
            });
        }

    });

    app.delete('/api/todo', function(req, res){
        Todos.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;

            res.send('Success');
        })
    });


}