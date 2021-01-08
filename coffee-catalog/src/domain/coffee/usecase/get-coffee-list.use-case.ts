import { CoffeeEntity } from 'src/domain/coffee/entity/coffee.entity';
import { GetCoffeeListUseCasePort } from 'src/domain/coffee/port/usecase/get-coffee-list.use-case.port';

export interface GetCoffeeListUseCase {
  getCoffeeList(opts: GetCoffeeListUseCasePort): Promise<CoffeeEntity[]>;
}
