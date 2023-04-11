import  express,{Request, Response} from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mainRouters from "./routers/index"
dotenv.config();
const server = express();
server.use(bodyParser.json())
server.use(cors());
server.use(express.urlencoded({extended: true}));

server.use(mainRouters);

server.use((req:Request, res: Response)=>{
    res.status(404);
    res.json({error: 'Pagina não encontrada.'});
});

server.listen(process.env.PORT);