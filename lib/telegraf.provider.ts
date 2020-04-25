import {
  Injectable,
  Inject,
  OnApplicationBootstrap,
  Logger,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Telegraf, Context } from 'telegraf';
import { TELEGRAF_MODULE_OPTIONS } from './telegraf.constants';
import { TelegrafModuleOptions } from './interfaces';

@Injectable()
export class TelegrafProvider extends Telegraf<Context>
  implements OnApplicationBootstrap, OnApplicationShutdown {
  private logger = new Logger('Telegraf');
  private launchOptions;

  constructor(@Inject(TELEGRAF_MODULE_OPTIONS) options: TelegrafModuleOptions) {
    super(options.token, options.options);
    this.launchOptions = options.launchOptions;
  }

  onApplicationBootstrap() {
    this.catch((e) => {
      this.logger.error(e);
    });

    this.launch(this.launchOptions);
  }

  async onApplicationShutdown(signal?: string) {
    await this.stop();
  }
}
