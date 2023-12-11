import { decodeBase64 } from "../utils";
import { generateSignature } from "./generateSignature";

interface VerifyOptionsInterface {
	token: string;
	secret: string;
}

export function verify({ token, secret }: VerifyOptionsInterface) {
	const [headerSent, payloadSent, signatureSent] = token.split(".");
	const signature = generateSignature({
		header: headerSent,
		payload: payloadSent,
		secret,
	});

	if (signature !== signatureSent) {
		throw new Error("Invalid JWT Token.");
	}

	const decodedPayload = decodeBase64({ data: payloadSent });

	if (decodedPayload.exp < Date.now()) {
		throw new Error("Expired Token.");
	}

	return decodedPayload;
}
