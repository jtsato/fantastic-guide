import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeveloperToolProficiencyModuleBase } from "./base/developerToolProficiency.module.base";
import { DeveloperToolProficiencyService } from "./developerToolProficiency.service";
import { DeveloperToolProficiencyController } from "./developerToolProficiency.controller";
import { DeveloperToolProficiencyResolver } from "./developerToolProficiency.resolver";

@Module({
  imports: [DeveloperToolProficiencyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeveloperToolProficiencyController],
  providers: [
    DeveloperToolProficiencyService,
    DeveloperToolProficiencyResolver,
  ],
  exports: [DeveloperToolProficiencyService],
})
export class DeveloperToolProficiencyModule {}
