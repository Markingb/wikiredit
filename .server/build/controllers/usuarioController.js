"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE usuarios set ? WHERE id_usuarios = ?', [req.body, id]);
                res.json({ text: 'Usuario actualizado ' + req.params.id });
            }
            catch (e) {
                //console.log(e.name, e.message);
                res.json({ text: e.name + e.message });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
                res.json({ text: 'Se ha creado el usuario}' });
            }
            catch (e) {
                //console.log(e.name, e.message);
                res.json({ text: e.name + e.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM usuarios WHERE id_usuarios = ?', [id]);
                res.json({ text: 'Usuario eliminado' });
            }
            catch (e) {
                res.json({ text: e.name + e.message });
            }
        });
    }
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield database_1.default.query('SELECT * FROM usuarios');
                res.json(posts);
            }
            catch (e) {
                res.json({ text: e.name + e.message });
            }
        });
    }
    un_usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const posts_ = yield database_1.default.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id]);
                //console.log(posts_);
                res.json(posts_);
            }
            catch (e) {
                res.json({ text: e.name + e.message });
            }
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
