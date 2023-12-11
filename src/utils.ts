// should be in a env variable, but for learning process that's is fine
export const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
export const SECRET = "#mandapix";

export function encodeBase64({ data }: Record<string, any>) {
	return Buffer.from(JSON.stringify(data)).toString("base64url");
}

export function decodeBase64({ data }: Record<string, any>) {
	const raw = Buffer.from(data, "base64url").toString("utf-8");

	return JSON.parse(raw);
}
