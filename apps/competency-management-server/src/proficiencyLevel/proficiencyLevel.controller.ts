import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProficiencyLevelService } from "./proficiencyLevel.service";
import { ProficiencyLevelControllerBase } from "./base/proficiencyLevel.controller.base";

@swagger.ApiTags("proficiencyLevels")
@common.Controller("proficiencyLevels")
export class ProficiencyLevelController extends ProficiencyLevelControllerBase {
  constructor(
    protected readonly service: ProficiencyLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
