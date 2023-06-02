"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = require("../controllers/TaskController");
const router = (0, express_1.Router)();
router.get('/eat', TaskController_1.getTask);
router.post('/', function (req, res) {
    res.send(`<h1>tasks(${req.method})</h1>`);
});
router.get('/', function (req, res) {
    res.send(`<h1>tasks(${req.method})</h1>`);
});
router.patch('/:id', function (req, res) {
    res.send(`<h1>tasks(${req.method}-${req.params.id})</h1>`);
});
router.delete('/:id', function (req, res) {
    res.send(`<h1>tasks(${req.method}-${req.params.id})</h1>`);
});
exports.default = router;
