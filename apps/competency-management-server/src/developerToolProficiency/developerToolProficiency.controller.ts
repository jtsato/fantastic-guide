import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeveloperToolProficiencyService } from "./developerToolProficiency.service";
import { DeveloperToolProficiencyControllerBase } from "./base/developerToolProficiency.controller.base";

@swagger.ApiTags("developerToolProficiencies")
@common.Controller("developerToolProficiencies")
export class DeveloperToolProficiencyController extends DeveloperToolProficiencyControllerBase {
  constructor(
    protected readonly service: DeveloperToolProficiencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
