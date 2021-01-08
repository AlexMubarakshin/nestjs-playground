import { CoffeeRepositoryPort } from 'src/domain/coffee/port/persistence/coffee-repository.port';
import { GetCoffeeUseCase } from 'src/domain/coffee/usecase/get-coffee.use-case';
import { CoffeeEntity } from 'src/domain/coffee/entity/coffee.entity';
import { GetCoffeeUseCasePort } from 'src/domain/coffee/port/usecase/get-coffee.use-case.port';

export class GetCoffeeService implements GetCoffeeUseCase {
  constructor(private readonly _repository: CoffeeRepositoryPort) {}

  getCoffee(coffee: GetCoffeeUseCasePort): Promise<CoffeeEntity> {
    return this._repository.findCoffee(coffee);
  }
}
