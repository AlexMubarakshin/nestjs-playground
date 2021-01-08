import { Application } from 'src/application';

async function bootstrap() {
  const application = new Application(3000);

  await application.run();
}

bootstrap();
