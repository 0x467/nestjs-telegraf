import { SetMetadata } from '@nestjs/common';
import { DECORATORS } from '../telegraf.constants';
import { HearsTriggers } from 'telegraf/typings/composer';

export type TelegrafHearsTriggers = HearsTriggers<any>;

export interface TelegrafHearsMetadata {
  triggers: TelegrafHearsTriggers;
}

/**
 * Registers middleware for handling text messages.
 * @param triggers Triggers
 *
 * https://telegraf.js.org/#/?id=hears
 */
export function TelegrafHears(
  triggers: TelegrafHearsTriggers,
): MethodDecorator {
  return SetMetadata(DECORATORS.HEARS, { triggers: triggers });
}
