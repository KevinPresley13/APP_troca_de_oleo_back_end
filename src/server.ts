import  express,{Request, Response} from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const server = express();

server.use(cors());
server.use(express.urlencoded({extended: true}));

server.use((req:Request, res: Response)=>{
    res.status(404);
    res.json({error: 'Pagina não encontrada.'});
});

server.listen(process.env.PORT);