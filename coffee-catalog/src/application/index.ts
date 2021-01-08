import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/app.module';

export class Application {
  constructor(private readonly _port: number) {}

  public async run(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    await app.listen(this._port);
  }
}
