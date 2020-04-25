import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import {
  LaunchPollingOptions,
  LaunchWebhookOptions,
  TelegrafOptions,
} from 'telegraf/typings/telegraf';

export interface TelegrafModuleOptions {
  token: string;
  options?: TelegrafOptions;
  launchOptions?: {
    polling?: LaunchPollingOptions;
    webhook?: LaunchWebhookOptions;
  };
}

export interface TelegrafOptionsFactory {
  createTelegrafOptions(): TelegrafModuleOptions;
}

export interface TelegrafModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<TelegrafOptionsFactory>;
  useClass?: Type<TelegrafOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<TelegrafModuleOptions> | TelegrafModuleOptions;
  inject?: any[];
}
