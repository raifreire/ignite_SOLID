/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);

    if (isAdmin.admin === false) {
      throw new Error("is not admin")
    } else if (!isAdmin) {
      throw new Error("not found");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
