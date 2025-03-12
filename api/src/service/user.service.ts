import { ResponseType } from "../@types/response.type";
import { AuthResponseType } from "../controllers/users/types/auth.type";
import { UserResponse, UserType } from "../controllers/users/types/user.type";
import { UserRepository } from "../repository/user.repository";
import { EncryptService } from "./encrypt.service";

export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async auth({
    username,
    password,
  }: UserType): Promise<ResponseType<AuthResponseType>> {
    const user = await this.repository.findByUsername(username);

    if (!user) {
      return [undefined, { message: "Usuário não encontrado!", code: 404 }];
    }
    const isPasswordValid = await EncryptService.compare(
      password,
      user.password
    );
    if (isPasswordValid) return [{ authorized: true }];
    return [{ authorized: false }];
  }

  async register({
    username,
    password,
    email,
  }: UserType): Promise<ResponseType<UserResponse>> {
    const userNameInUse = await this.repository.findByUsername(username);

    if (userNameInUse) {
      return [undefined, { message: "Username existente!", code: 403 }];
    }
    const passwordIncrypted = await EncryptService.hash(password);

    const user = await this.repository.insertUser(
      username,
      passwordIncrypted,
      email
    );

    if (user) {
      return [user];
    }
    return [undefined, { message: "Falha ao inserir usuário!", code: 403 }];
  }
}
