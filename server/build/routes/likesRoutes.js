"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likesController_1 = __importDefault(require("../controllers/likesController"));
class LikesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/:id', likesController_1.default.likke);
    }
}
const likesRoutes = new LikesRoutes();
exports.default = likesRoutes.router;
