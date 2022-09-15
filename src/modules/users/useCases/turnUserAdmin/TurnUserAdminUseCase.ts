/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {

    const idUser = this.usersRepository.findById(user_id);

    if (!idUser) {
      throw new Error("user not exists");
    }

    return this.usersRepository.turnAdmin(idUser);
  }
}

export { TurnUserAdminUseCase };
