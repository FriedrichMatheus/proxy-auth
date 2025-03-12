import { User } from "@prisma/client";
import { db } from "../configs/prisma.config";

export class UserRepository {
  async findByUsername(username: string) {
    return await db.user.findUnique({ where: { username } });
  }

  async insertUser(email: string, password: string, username: string) {
    return await db.user.create({
      omit: { password: true },
      data: {
        email: email,
        password: password,
        username: username,
      },
    });
  }

  async findAll() {
    return await db.user.findMany();
  }

  async findByEmail(email: string) {
    return await db.user.findUnique({ where: { email } });
  }

  async findById(id: number) {
    return await db.user.findUnique({ where: { id } });
  }

  async delete(id: number) {
    return await db.user.delete({ where: { id } });
  }
}
