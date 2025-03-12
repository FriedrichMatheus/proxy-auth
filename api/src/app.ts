import fastify from "fastify";
import routes from "./routes";

const app = fastify();

app.register(routes, { prefix: "/api/v1" });

app.listen({ port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});
