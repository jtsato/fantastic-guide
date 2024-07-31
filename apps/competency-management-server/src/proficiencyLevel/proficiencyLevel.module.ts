import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProficiencyLevelModuleBase } from "./base/proficiencyLevel.module.base";
import { ProficiencyLevelService } from "./proficiencyLevel.service";
import { ProficiencyLevelController } from "./proficiencyLevel.controller";
import { ProficiencyLevelResolver } from "./proficiencyLevel.resolver";

@Module({
  imports: [ProficiencyLevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProficiencyLevelController],
  providers: [ProficiencyLevelService, ProficiencyLevelResolver],
  exports: [ProficiencyLevelService],
})
export class ProficiencyLevelModule {}
