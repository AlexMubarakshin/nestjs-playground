import { CoffeeEntity } from 'src/domain/coffee/entity/coffee.entity';
import { GetCoffeeUseCasePort } from 'src/domain/coffee/port/usecase/get-coffee.use-case.port';

export interface GetCoffeeUseCase {
  getCoffee(coffee: GetCoffeeUseCasePort): Promise<CoffeeEntity>;
}
