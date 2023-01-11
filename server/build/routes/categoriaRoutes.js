"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = __importDefault(require("../controllers/categoriaController"));
class CategoriaRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', categoriaController_1.default.busqueda_de_categorias);
    }
}
const categoriaRouter = new CategoriaRouter();
exports.default = categoriaRouter.router;
