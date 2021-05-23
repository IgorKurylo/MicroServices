"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routers_1 = __importDefault(require("./routes/routers"));
var app = express_1.default();
var PORT = 3001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(routers_1.default);
app.get('/', function (req, res) {
    res.send("Users Api " + process.env.ENV_NAME);
});
app.listen(PORT, function () {
    console.log("Server running on " + PORT);
});
