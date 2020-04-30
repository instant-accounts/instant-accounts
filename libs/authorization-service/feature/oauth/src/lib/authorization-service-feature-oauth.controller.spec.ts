import { Test } from '@nestjs/testing';
import { AuthorizationServiceFeatureOauthController } from './authorization-service-feature-oauth.controller';
import { AuthorizationServiceFeatureOauthService } from './authorization-service-feature-oauth.service';

describe('AuthorizationServiceFeatureOauthController', () => {
  let controller: AuthorizationServiceFeatureOauthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthorizationServiceFeatureOauthService],
      controllers: [AuthorizationServiceFeatureOauthController]
    }).compile();

    controller = module.get(AuthorizationServiceFeatureOauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
