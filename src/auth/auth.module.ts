import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const privateKey = configService.get<string>('jwtPrivateKey');
        const algorithm = configService.get<string>('jwtAlgorithm');
        const issuer = configService.get<string>('jwtIssuer');
        const expiry = configService.get<string>('jwtExpiry');

        // Debug logs
        console.log('JWT Config Check:');
        console.log('Private key exists:', !!privateKey);
        console.log('Algorithm:', algorithm);
        console.log('Issuer:', issuer);
        console.log('Expiry:', expiry);

        if (!privateKey || privateKey.trim() === '') {
          console.warn('No private key found, using simple secret');
          return {
            secret:
              configService.get<string>('jwtSecret') || 'fallback-secret-key',
            signOptions: {
              expiresIn: expiry || '1d',
              ...(issuer && { issuer }),
            },
          };
        }

        // Use RSA keys
        const signOptions: any = {
          expiresIn: expiry || '1d',
          algorithm: algorithm || 'RS256',
        };

        // Only add issuer if it's a valid string
        if (issuer && typeof issuer === 'string' && issuer.trim() !== '') {
          signOptions.issuer = issuer;
        }

        return {
          privateKey: privateKey,
          publicKey: configService.get<string>('jwtPublicKey'),
          signOptions,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
