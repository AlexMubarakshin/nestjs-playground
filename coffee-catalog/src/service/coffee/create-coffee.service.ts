import { CoffeeEntity } from 'src/domain/coffee/entity/coffee.entity';
import { CoffeeRepositoryPort } from 'src/domain/coffee/port/persistence/coffee-repository.port';
import { CreateCoffeeUseCase } from 'src/domain/coffee/usecase/create-coffee.use-case';
import { CreateCoffeeUseCasePort } from 'src/domain/coffee/port/usecase/create-coffee.use-case.port';

export class CreateCoffeeService implements CreateCoffeeUseCase {
  constructor(private readonly _repository: CoffeeRepositoryPort) {}

  async createCoffee(coffee: CreateCoffeeUseCasePort): Promise<CoffeeEntity> {
    const coffeeEntity: CoffeeEntity = await CoffeeEntity.new({
      title: coffee.title,
      description: coffee.description,
    });

    return this._repository.addCoffee(coffeeEntity);
  }
}
