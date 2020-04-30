import { Controller, Get, Inject } from "@nestjs/common"

import { AppService } from "./app.service"
import { HeroService } from "./hero"
import { ClientGrpc } from "@nestjs/microservices"
import { Metadata } from "grpc"

@Controller("hero")
export class AppController {
  //constructor(private readonly appService: AppService) {}
  private heroService: HeroService

  constructor(@Inject("HERO_PACKAGE") private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>("HeroService")
  }

  @Get()
  getById() {
    const tt = new Metadata()
    tt.add("Authorization", "some bearer token")
    return this.heroService.findOne({ id: 1 }, tt)
  }

  @Get("test")
  getDatac() {
    return "hello"
  }
}
