"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const comentarioRoutes_1 = __importDefault(require("./routes/comentarioRoutes"));
const com_usuRoutes_1 = __importDefault(require("./routes/com-usuRoutes"));
const photoRoutes_1 = __importDefault(require("./routes/photoRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //Para que pueda acceder a las fotos
        this.app.use('/photo', express_1.default.static(path_1.default.resolve('photo')));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/posts', postRoutes_1.default);
        this.app.use('/api/usuarios', usuarioRoutes_1.default);
        this.app.use('/api/comentarios', comentarioRoutes_1.default);
        this.app.use('/api/comentario/usu/', com_usuRoutes_1.default);
        this.app.use('/api/photo/', photoRoutes_1.default);
        this.app.use('/api/login/', loginRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en el puerto ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
