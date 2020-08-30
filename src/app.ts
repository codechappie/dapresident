import express, { Application, urlencoded } from 'express';
import morgan from 'morgan';

//ROUTES
import IndexRoutes from './routes/index.route';
import PresidentRoutes  from './routes/president.route'

const app = express();

export class App {
    private app: Application;
    constructor(private port?: string | number) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/presidents', PresidentRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log("Server on port " + this.app.get('port'));
    }
}

export default app