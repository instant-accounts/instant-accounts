import { Module } from '@nestjs/common';
import { AuthorizationServiceFeatureOauthService } from './authorization-service-feature-oauth.service';
import { AuthorizationServiceFeatureOauthController } from './authorization-service-feature-oauth.controller';

@Module({
  controllers: [AuthorizationServiceFeatureOauthController],
  providers: [AuthorizationServiceFeatureOauthService],
  exports: [AuthorizationServiceFeatureOauthService]
})
export class AuthorizationServiceFeatureOauthModule {}
