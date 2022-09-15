/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const emailAllreadyExists = this.usersRepository.findByEmail(email)
    if (emailAllreadyExists) {
      throw new Error("Email Allready Exists");
    }
    return this.usersRepository.create({ email, name })
  }
}

export { CreateUserUseCase };
