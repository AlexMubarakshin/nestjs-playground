import { Controller, Inject, Post } from '@nestjs/common';

import { CoffeeDiTokens } from 'src/domain/coffee/di.tokens';

import { CreateCoffeeUseCase } from 'src/domain/coffee/usecase/create-coffee.use-case';
import { GetCoffeeUseCase } from 'src/domain/coffee/usecase/get-coffee.use-case';
import { GetCoffeeListUseCase } from 'src/domain/coffee/usecase/get-coffee-list.use-case';

@Controller('coffee')
export class CoffeeController {
  constructor(
    @Inject(CoffeeDiTokens.CreateCoffeeUseCase)
    private readonly createCoffeeUseCase: CreateCoffeeUseCase,
    @Inject(CoffeeDiTokens.GetCoffeeUseCase)
    private readonly getCoffeeUseCase: GetCoffeeUseCase,
    @Inject(CoffeeDiTokens.GetCoffeeListUseCase)
    private readonly geCoffeeListUseCase: GetCoffeeListUseCase,
  ) {}

  @Post('/')
  public async createCoffee() {
    const coffee = await this.createCoffeeUseCase.createCoffee({
      title: '',
      description: '',
    });

    return coffee;
  }
}
