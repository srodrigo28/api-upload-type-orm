import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/upload", async (req: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    })
}