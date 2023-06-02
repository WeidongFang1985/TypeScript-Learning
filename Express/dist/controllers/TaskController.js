"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = void 0;
const getTask = (req, res, next) => {
    res.json({
        title: "eat",
        date: "20220101",
        finished: false,
    });
};
exports.getTask = getTask;
