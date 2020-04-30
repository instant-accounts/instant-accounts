import { Module } from "@nestjs/common"
import { ConsulModule } from "@nestcloud/consul"
import { ServiceModule } from "@nestcloud/service"
import { BootModule } from "@nestcloud/boot"
import { BOOT, CONSUL } from "@nestcloud/common"
import { resolve, join } from "path"

import { AuthorizationServiceFeatureOauthModule } from "@instant-accounts-ws/authorization-service/feature/oauth"

@Module({
  imports: [
    BootModule.forRoot({
      filePath: join(__dirname, "config/config.yaml"),
    }),
    // consul backend
    ConsulModule.forRootAsync({ inject: [BOOT] }),
    ServiceModule.forRootAsync({
      discoveryHost: "192.1.1.1",
      inject: [BOOT, CONSUL],
    }),
    AuthorizationServiceFeatureOauthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
