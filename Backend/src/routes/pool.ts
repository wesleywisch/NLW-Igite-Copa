import { FastifyInstance } from "fastify";
import { z } from "zod";
import ShortUniqueId from "short-unique-id";

import { prisma } from "../lib/prisma";

export async function poolRoutes(fastify: FastifyInstance) {
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });

  fastify.post("/pools", async (req, res) => {
    try {
      const createPoolBody = z.object({
        title: z.string(),
      });

      const { title } = createPoolBody.parse(req.body);
      const generate = new ShortUniqueId({ length: 6 });
      const code = String(generate()).toUpperCase();

      await prisma.pool.create({
        data: {
          title,
          code,
        },
      });

      return res.status(201).send({ code });
    } catch (err) {
      return res.status(400).send({ error: "Sintaxe invalida" });
    }
  });
}