"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cesta = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
let Cesta = class Cesta {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cesta.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cesta.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cesta.prototype, "imagem", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Cesta.prototype, "preco", void 0);
__decorate([
    typeorm_1.OneToOne(() => Usuario_1.Usuario, usuario => usuario.id),
    __metadata("design:type", Usuario_1.Usuario)
], Cesta.prototype, "usuarioId", void 0);
Cesta = __decorate([
    typeorm_1.Entity()
], Cesta);
exports.Cesta = Cesta;
//# sourceMappingURL=Cesta.js.map