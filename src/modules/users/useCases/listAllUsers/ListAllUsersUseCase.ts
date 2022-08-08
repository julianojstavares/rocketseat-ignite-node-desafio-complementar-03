import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {

    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {

        const auth = this.usersRepository.findById(user_id);

        if(!auth) {
            throw new Error("Admin not informed");
        }
        
        if(!auth.admin) {

            throw new Error("Unauthorized");

        }

        const users = this.usersRepository.list();

        return users;

    }
    
}

export { ListAllUsersUseCase };
