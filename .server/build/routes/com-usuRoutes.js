"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const com_usuController_1 = __importDefault(require("../controllers/com-usuController"));
class Com_usuRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', com_usuController_1.default.de_un_usu);
    }
}
const com_usuRoutes = new Com_usuRoutes();
exports.default = com_usuRoutes.router;
