const createLogger = (level: string) =>
	level === "error" ? console.error : console.log;

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const log = createLogger(env.LOG_LEVEL);

		log(`[${env.ENVIRONMENT}] request received: ${request.url}`);

		const apiKeyStatus = env.API_KEY ? "set" : "not set";
		const body = [
			`Hello from ${env.ENVIRONMENT}!`,
			`LOG_LEVEL: ${env.LOG_LEVEL}`,
			`API_KEY: ${apiKeyStatus}`,
		].join("\n");
		return new Response(body, {
			headers: { "Content-Type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
