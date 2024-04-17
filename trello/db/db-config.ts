import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DataSourceOptions } from "typeorm";

@Injectable()

export class DatabaseConfig {
    constructor(private configService: ConfigService) { }

    public getDbConfig() : DataSourceOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: +this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASS'),
            database: this.configService.get<string>('DB_NAME'),
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
            logging: true,
        }
    }
}