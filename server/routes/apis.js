var express = require('express');
var todos = require('./todos')
const sqlite3 = require('sqlite3').verbose();
// const bodyParser = require('body-parser');
var router = express.Router();


// Connect to SQLite database
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
  });
  
  // Create a table for todos
db.serialize(() => {
    db.run(`CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL
    )`);
});

router.get('/', function(req, res, next) {
  res.json({message:"hello world"})
});

router.head('/', function(req, res, next){
    res.set('x-api-status', 'live')
    res.end()
})

router.post('/todos', function(req, res, next){
    // console.log(todos)
    const sql = 'SELECT * from todos';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });

})

router.post('/todo', function(req, res, next){

    const { task } = req.body;
    console.log(req.body)
    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }

    const sql = 'INSERT INTO todos (task) VALUES (?)';
    db.run(sql, [task], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, task });
    });

})

router.get('/todo/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'SELECT * FROM todos WHERE id = ?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(row);
    });
});

router.put('/todo/:id', (req, res) => {
    const id = req.params.id;
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }

    const sql = 'UPDATE todos SET task = ? WHERE id = ?';
    db.run(sql, [task, id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json({ id, task });
    });
});

router.delete('/todo/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM todos WHERE id = ?';
    db.run(sql, [id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(204).send(); // No content to send back
    });
});


module.exports = router;
