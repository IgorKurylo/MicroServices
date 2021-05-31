"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jwtToken_1 = require("../jwt/jwtToken");
var authRouter = express_1.Router();
var jwt = new jwtToken_1.JwtToken();
authRouter.post('/', function (request, response) {
    //TODO: make auth with jwt
    var auth = request.body;
    //TODO: check if user exist in db
    var user = {
        firstName: auth.userName,
        lastName: auth.userName,
        id: 1,
    };
    var token = jwt.generate(user);
    return response.status(200).send({ accessToken: token });
});
exports.default = authRouter;
