import { createHmac } from "crypto";

interface GenerateSignatureInterface {
	header: string;
	payload: string;
	secret: string;
}

export function generateSignature({
	header,
	payload,
	secret,
}: GenerateSignatureInterface) {
	const hmac = createHmac("SHA256", secret);

	return hmac.update(`${header}.${payload}`).digest("base64url");
}
