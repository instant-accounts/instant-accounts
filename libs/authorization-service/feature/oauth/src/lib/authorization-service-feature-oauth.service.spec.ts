import { Test } from '@nestjs/testing';
import { AuthorizationServiceFeatureOauthService } from './authorization-service-feature-oauth.service';

describe('AuthorizationServiceFeatureOauthService', () => {
  let service: AuthorizationServiceFeatureOauthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthorizationServiceFeatureOauthService]
    }).compile();

    service = module.get(AuthorizationServiceFeatureOauthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
