import { Metadata } from "grpc"
import { Observable } from "rxjs"

export interface HeroById {
  id: number
}

export interface Hero {
  id: number
  name: string
}

export interface HeroService {
  findOne(request: HeroById, metadata?: Metadata): Observable<Hero>
}
