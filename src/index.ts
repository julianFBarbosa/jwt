import { DAY_IN_MILLISECONDS, SECRET } from "./utils";
import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const token = sign({
	exp: Date.now() + DAY_IN_MILLISECONDS,
	data: {
		sub: "@julian.barbosa",
		roles: ["admin"],
	},
	secret: SECRET,
});

const decoded = verify({
	token,
	// to validate, you can just switch the secret to another data
	// or change any data from the token above
	secret: SECRET,
});

console.log("decoded", decoded);
