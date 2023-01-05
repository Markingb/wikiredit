"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentarioController_1 = __importDefault(require("../controllers/comentarioController"));
class ComentarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', comentarioController_1.default.de_un_post);
        //this.router.get('/:id',comentarioController.de_un_usu);
        this.router.post('/', comentarioController_1.default.create);
        this.router.put('/:id', comentarioController_1.default.update);
        this.router.delete('/:id', comentarioController_1.default.delete);
    }
}
const comentarioRoutes = new ComentarioRoutes();
exports.default = comentarioRoutes.router;
