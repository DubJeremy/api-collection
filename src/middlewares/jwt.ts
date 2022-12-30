import { Request, Response, NextFunction } from "express";
import config from "../config";
let jwt = require("jsonwebtoken");

export function generateToken(payload) {
    return jwt.sign(payload, config.jwtSecret, { expiresIn: "7d" });
}

export function verifyToken(token) {
    return jwt.verify(token, config.jwtSecret);
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        res.status(401).send();
        return;
    }

    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
        expiresIn: "7d",
    });
    res.setHeader("token", newToken);

    next();
};
