import { v4 as uuidv4 } from 'uuid';
import { IsString } from 'class-validator';

import { CoffeeCreatePayload } from 'src/domain/coffee/entity/coffee-create.payload';
import { Entity } from 'src/common/entity/Entity';

export type CoffeeId = string;

export class CoffeeEntity extends Entity {
  private readonly _id: CoffeeId;
  private readonly _title: string;
  private readonly _description: string;

  constructor(payload: CoffeeCreatePayload) {
    super();

    this._id = payload.id || uuidv4();
    this._title = payload.title;
    this._description = payload.description;
  }

  get id(): CoffeeId {
    return this._id;
  }

  @IsString()
  get title(): string {
    return this._title;
  }

  @IsString()
  get description(): string {
    return this._description;
  }

  public static async new(payload: CoffeeCreatePayload): Promise<CoffeeEntity> {
    const coffee = new CoffeeEntity(payload);

    await coffee.validate();

    return coffee;
  }
}
