"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usu_comenController_1 = __importDefault(require("../controllers/usu_comenController"));
class Usu_comenRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    config() {
        this.router.get('/:id', usu_comenController_1.default.de_un_usu);
    }
}
const usu_comenRoutes = new Usu_comenRoutes();
exports.default = usu_comenController_1.default.router;
