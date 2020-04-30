import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common"
import { Observable, throwError } from "rxjs"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class GrpcAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const type = context.getType()
    const prefix = "Bearer "
    let header
    if (type === "rpc") {
      const metadata = context.getArgByIndex(1) // metadata
      if (!metadata) {
        return false
      }
      header = metadata.get("Authorization")[0]
    }

    if (!header || !header.includes(prefix)) {
      return false
    }

    const token = header.slice(header.indexOf(" ") + 1)
    try {
      const valid = this.jwtService.verify(token)
      return valid
    } catch (e) {
      return false
    }
  }
}
