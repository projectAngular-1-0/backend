"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./class/Server"));
//levantamos el server
const serverOne = new Server_1.default();
serverOne.start(() => {
    console.log(`Server run on port ${serverOne.port}`);
});
