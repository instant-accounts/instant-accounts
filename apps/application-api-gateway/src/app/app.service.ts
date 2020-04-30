import { Inject, Injectable, OnModuleInit } from "@nestjs/common"
import { ClientGrpc } from "@nestjs/microservices"
import { HeroService } from "./hero"
//import { Metadata } from "grpc"

@Injectable()
export class AppService implements OnModuleInit {
  private heroService: HeroService
  constructor(@Inject("HERO_PACKAGE") private client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>("HeroService")
  }

  getData() {
    debugger
    // const test = new Metadata()
    // test.add("test", "testme")

    console.log("calling")
    const item = this.heroService.findOne({ id: 1 })
    console.log("called!")
    return item
  }
}
