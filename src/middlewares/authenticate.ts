var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

import config from "../config";

export function checkPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

export function generateToken(payload) {
    return jwt.sign(payload, config.jwtSecret, { expiresIn: "7d" });
}

export function verifyToken(token) {
    return jwt.verify(token, config.jwtSecret);
}

export function authenticatedRoute(req, res, next) {
    const authorizationHeader = req.header("Authorization");
    let $header, token;

    if (authorizationHeader) {
        [$header, token] = authorizationHeader.split(" ");
    } else {
        token = req.query?.access_token;

        if (!token) {
            return res
                .status(401)
                .json({ error: { message: "Authorization is missing" } });
        }
    }

    try {
        if (token) {
            const payload = verifyToken(token);
            if (payload.id) {
                req.session.userId = payload.id;
                req.session.userPermissions = getPermissions(payload.role);
                return next();
            }
        }
        return res.sendStatus(401);
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            return res.sendStatus(401);
        }
    }
}
