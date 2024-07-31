import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeveloperToolProficiencyResolverBase } from "./base/developerToolProficiency.resolver.base";
import { DeveloperToolProficiency } from "./base/DeveloperToolProficiency";
import { DeveloperToolProficiencyService } from "./developerToolProficiency.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeveloperToolProficiency)
export class DeveloperToolProficiencyResolver extends DeveloperToolProficiencyResolverBase {
  constructor(
    protected readonly service: DeveloperToolProficiencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
