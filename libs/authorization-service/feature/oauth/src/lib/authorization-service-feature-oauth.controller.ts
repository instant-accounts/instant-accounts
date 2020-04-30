import { Controller, UseGuards } from "@nestjs/common"
import { of } from "rxjs"
import { AuthorizationServiceFeatureOauthService } from "./authorization-service-feature-oauth.service"
import { GrpcMethod } from "@nestjs/microservices"
import { Metadata } from "grpc"
import { GrpcAuthGuard } from "./grpc-auth-guard"
import { Observable } from "rxjs"
import { Hero, HeroById, HeroService } from "../../../../../../apps/application-api-gateway/src/app/hero"

@Controller("authorization-service-feature-oauth")
export class AuthorizationServiceFeatureOauthController implements HeroService {
  constructor(private authorizationServiceFeatureOauthService: AuthorizationServiceFeatureOauthService) {}
  /*  @GrpcMethod("HeroService", "FindOne")
  @UseGuards(GrpcAuthGuard)
  FindddOne(request: HeroById): any {
    console.log("here is data! ", request.id)
    console.log("I am outputingg!!")
    const items = [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
    ]

    const yes = items.find(({ id }) => id === request.id)

    return of(yes)
  }*/

  @GrpcMethod("HeroService", "FindOne")
  findOne(request: HeroById, metadata?: Metadata): Observable<Hero> {
    console.log("here is data! ", request.id)
    console.log("this is the metadata ", metadata)

    const items = [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
    ]

    const item = items.find(({ id }) => id === request.id)

    return of(item)
  }
}
