import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProficiencyLevelResolverBase } from "./base/proficiencyLevel.resolver.base";
import { ProficiencyLevel } from "./base/ProficiencyLevel";
import { ProficiencyLevelService } from "./proficiencyLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProficiencyLevel)
export class ProficiencyLevelResolver extends ProficiencyLevelResolverBase {
  constructor(
    protected readonly service: ProficiencyLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
