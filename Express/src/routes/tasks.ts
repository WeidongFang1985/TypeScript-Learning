import {Router} from "express";
import {getTask} from "../controllers/TaskController";

const router = Router();

router.get('/eat',getTask)

router.post('/', function (req, res) {
    res.send(`<h1>tasks(${req.method})</h1>`)
});
router.get('/', function (req, res) {
    res.send(`<h1>tasks(${req.method})</h1>`)
});
router.patch('/:id', function (req, res) {
    res.send(`<h1>tasks(${req.method}-${req.params.id})</h1>`)
});
router.delete('/:id', function (req, res) {
    res.send(`<h1>tasks(${req.method}-${req.params.id})</h1>`)
});

export default router;