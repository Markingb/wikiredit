"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photoController_1 = __importDefault(require("../controllers/photoController"));
const multer_1 = __importDefault(require("../lib/multer"));
let nameimage = multer_1.default.single('image');
class PhotoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/photo,)
        this.router.post('/', nameimage, photoController_1.default.nimage);
    }
}
const photoRoutes = new PhotoRoutes();
exports.default = photoRoutes.router;
