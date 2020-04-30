import { NestFactory } from "@nestjs/core"
import { MicroserviceOptions, Transport } from "@nestjs/microservices"

import { AppModule } from "./app/app.module"
import { join } from "path"

const bootstrap = async () => {
  /*  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });*/

  const app = await NestFactory.create(AppModule)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ["hero"],
      protoPath: [join(__dirname, "proto/hero.proto")],
    },
  })

  await app.startAllMicroservicesAsync()
  await app.listen(3001)
  console.log(`Application is running on: ${await app.getUrl()}`)
}

// noinspection JSIgnoredPromiseFromCall
bootstrap()
