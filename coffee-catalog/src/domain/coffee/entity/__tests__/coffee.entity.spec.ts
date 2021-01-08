import { CoffeeEntity, CoffeeId } from 'src/domain/coffee/entity/coffee.entity';

describe('Coffee entity', () => {
  const coffeeId: CoffeeId = 'abc';
  const title = 'Cappuccino';
  const description =
    'Is an espresso-based coffee drink that originated in Italy';

  it('constructor()', () => {
    const cappuccino = new CoffeeEntity({
      id: coffeeId,
      title,
      description,
    });

    expect(cappuccino.id).toEqual(coffeeId);
    expect(cappuccino.title).toEqual(title);
    expect(cappuccino.description).toEqual(description);
  });

  it('Should generate ID on constructor()', async () => {
    const cappuccino = new CoffeeEntity({
      title,
      description,
    });

    expect(!!cappuccino.id).toBeTruthy();
  });
});
