import { CoffeeEntity } from 'src/domain/coffee/entity/coffee.entity';

export interface CoffeeRepositoryPort {
  findCoffee(by: { id: string }): Promise<CoffeeEntity>;

  findCoffeeList(): Promise<CoffeeEntity[]>;

  addCoffee(coffee: CoffeeEntity): Promise<CoffeeEntity>;
}
