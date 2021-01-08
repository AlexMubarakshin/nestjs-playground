import { CreateCoffeeUseCasePort } from 'src/domain/coffee/port/usecase/create-coffee.use-case.port';
import { CoffeeEntity } from 'src/domain/coffee/entity/coffee.entity';

export interface CreateCoffeeUseCase {
  createCoffee(coffee: CreateCoffeeUseCasePort): Promise<CoffeeEntity>;
}
