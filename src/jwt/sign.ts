import { encodeBase64 } from "../utils";
import { generateSignature } from "./generateSignature";

interface SignOptionsInterface {
	data: Record<string, any>;
	exp: number;
	secret: string;
}

export function sign({ data, exp, secret }: SignOptionsInterface) {
	const header = {
		alg: "HS256",
		typ: "JWT",
	};
	const payload = {
		...data,
		iat: Date.now(),
		exp: exp,
	};

	const base64EncodedHeader = encodeBase64({ data: header });
	const base64EncodedPayload = encodeBase64({ data: payload });

	const signature = generateSignature({
		header: base64EncodedHeader,
		payload: base64EncodedPayload,
		secret,
	});

	return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;
}
