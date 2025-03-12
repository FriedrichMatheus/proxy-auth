import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/users/user.controller";
import { UserService } from "../service/user.service";
import { UserRepository } from "../repository/user.repository";

export default async function routes(fastify: FastifyInstance) {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  fastify.post<any>("/auth", (req, res) => userController.auth(req, res));
}
