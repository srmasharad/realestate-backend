import { AuthenticatedUser } from 'src/modules/auth/types/authenticated-user.type';

import { CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

export class VerifiedEmailGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{ user?: AuthenticatedUser }>();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Authenticated user not found');
    }

    if (!user.isEmailVerified) {
      throw new ForbiddenException('Please verify your email before continuing');
    }

    return true;
  }
}
