import Fastify from "fastify";

const fastify = Fastify({ logger: true });

const users = {
  usuario1: "senha123",
  usuario2: "senha456",
};

// Rota de autenticação
fastify.post("/api/auth", async (request, reply) => {
  const { username, password } = request.body;

  if (users[username] && users[username] === password) {
    return { authenticated: true };
  }

  return reply.status(401).send({ authenticated: false });
});

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("API de autenticação rodando na porta 3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
