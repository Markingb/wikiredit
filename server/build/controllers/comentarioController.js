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
class ComentarioController {
    de_un_post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*try {
                
            } catch (e: any) {
                res.json({text: e.name + e.message});
            }*/
            try {
                const { id } = req.params;
                const coment_ = yield database_1.default.query('SELECT * FROM comentarios WHERE id_post = ?', [id]);
                res.json(coment_);
            }
            catch (e) {
                res.json({ text: e.name + e.message });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO comentarios set ?', [req.body]);
                res.json({ text: 'Se ha creado el comentario con exito' });
            }
            catch (e) {
                res.json({ text: e.name + e.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE comentarios set ? WHERE idcomentario = ?', [req.body, id]);
            res.json({ text: "Se ha actualizado el comentario" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM comentarios WHERE idcomentario = ?', [id]);
            res.json({ text: 'Comentario eliminado' });
        });
    }
}
const comentarioController = new ComentarioController();
exports.default = comentarioController;
