"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usu_postController_1 = __importDefault(require("../controllers/usu_postController"));
class Usu_postRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', usu_postController_1.default.todossuspost);
    }
}
const usu_postRoutes = new Usu_postRoutes();
exports.default = usu_postRoutes.router;
