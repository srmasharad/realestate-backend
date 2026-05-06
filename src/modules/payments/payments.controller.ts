import { CurrentUser } from 'src/common/decorators/current-user.decorator';

import { Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { PaymentsService } from './payments.service';

@ApiTags('Payments')
@Controller({
  path: 'payments',
  version: '1',
})
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post(':paymentRequestId/checkout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a Stripe checkout session for a payment request' })
  createCheckoutSession(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('paymentRequestId') paymentRequestId: string,
  ) {
    return this.paymentsService.createCheckoutSession(currentUser, paymentRequestId);
  }

  @ApiExcludeEndpoint()
  @Post('webhook')
  @ApiOperation({ summary: 'Stripe webhook endpoint' })
  handleWebhook(@Req() req: any) {
    return this.paymentsService.handleWebhook(req);
  }
}
