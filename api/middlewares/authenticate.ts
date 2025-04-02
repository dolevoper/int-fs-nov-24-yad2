import { Handler } from "express";

export const authenticate: Handler = (req, res, next) => {
    if (!req.signedCookies.userId) {
        res.status(401);
        res.end();
        return;
    }

    next();
};
