import express, {Router} from 'express';
import cors from 'cors';
import router from "./routes/tasks";
const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(3000,()=>{
    console.log("Starting on port 3000.")
})

app.get('/',(req:express.Request,res:express.Response) => {
    res.send({
        result:'OK!'
    })
})

app.use('/tasks', router);