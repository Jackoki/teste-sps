const jwt = require("jsonwebtoken");
const { users } = require("../database/user.database");
const User = require("../models/user.model");

class AuthService {
    login({email, password}){
        if(!email || !password) {
            return null;
        }

        const user = users.find(u => u.email === email && u.password === password);

        if(!user){
            return null;
        }

        const token = jwt.sign( {id: user.id, name: user.name, type:user.type}, process.env.JWT_SECRET, {expiresIn: "24h"} );

        return token;
    }
}

module.exports = new AuthService();