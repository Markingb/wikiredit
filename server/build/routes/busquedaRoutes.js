"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const busquedaController_1 = __importDefault(require("../controllers/busquedaController"));
class BusquedaRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', busquedaController_1.default.barradebusqueda);
    }
}
const busquedaRouter = new BusquedaRouter();
exports.default = busquedaRouter.router;
