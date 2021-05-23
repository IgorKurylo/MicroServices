"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JwtToken = /** @class */ (function () {
    function JwtToken() {
    }
    JwtToken.prototype.generate = function (user) {
        var token = jsonwebtoken_1.default.sign({ id: user.id }, 'secret', {
            expiresIn: '1day',
        });
        return token;
    };
    JwtToken.prototype.validate = function (token) {
        try {
            var decoded = jsonwebtoken_1.default.verify(token, 'secret');
        }
        catch (err) {
            console.log('Inalid Token', err);
            return false;
        }
        return true;
    };
    return JwtToken;
}());
exports.JwtToken = JwtToken;
