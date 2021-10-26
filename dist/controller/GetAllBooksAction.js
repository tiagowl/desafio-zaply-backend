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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooksAction = void 0;
const typeorm_1 = require("typeorm");
const Livro_1 = require("../entity/Livro");
function getAllBooksAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookRespository = typeorm_1.getManager().getRepository(Livro_1.Livro);
        const books = yield bookRespository.find();
        response.json(books);
    });
}
exports.getAllBooksAction = getAllBooksAction;
//# sourceMappingURL=GetAllBooksAction.js.map