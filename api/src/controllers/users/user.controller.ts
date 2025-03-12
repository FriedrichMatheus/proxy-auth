import { FastifyRequest, FastifyReply } from "fastify";
import { UserType } from "./types/user.type";
import { UserService } from "../../service/user.service";

export class UserController {
  constructor(private readonly service: UserService) {}

  async auth(
    { body }: FastifyRequest<{ Body: UserType }>,
    reply: FastifyReply
  ) {
    const [res, err] = await this.service.auth(body);

    if (err) {
      reply.code(err.code).send(err.message);
      return;
    }

    reply.code(200).send(res);
  }

  async register(
    { body }: FastifyRequest<{ Body: UserType }>,
    reply: FastifyReply
  ) {
    const [res, err] = await this.service.register(body);

    if (err) {
      reply.code(err.code).send(err.message);
      return;
    }

    reply.code(200).send(res);
  }

  // async addDataLimit(
  //   { body }: FastifyRequest<{ Body: DataLimitType }>,
  //   reply: FastifyReply
  // ) {
  //   const [res, err] = await this.service.addDataLimit(body);

  //   if (err) {
  //     reply.code(err.code).send(err.message);
  //     return;
  //   }

  //   reply.code(200).send(res);
  // }

  // async addDataUsed(
  //   { body }: FastifyRequest<{ Body: DataUsedType }>,
  //   reply: FastifyReply
  // ) {
  //   const [res, err] = await this.service.addDataUsed(body);

  //   if (err) {
  //     reply.code(err.code).send(err.message);
  //     return;
  //   }

  //   reply.code(200).send(res);
  // }
}
