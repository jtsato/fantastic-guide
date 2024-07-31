/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DeveloperToolProficiency } from "./DeveloperToolProficiency";
import { DeveloperToolProficiencyCountArgs } from "./DeveloperToolProficiencyCountArgs";
import { DeveloperToolProficiencyFindManyArgs } from "./DeveloperToolProficiencyFindManyArgs";
import { DeveloperToolProficiencyFindUniqueArgs } from "./DeveloperToolProficiencyFindUniqueArgs";
import { CreateDeveloperToolProficiencyArgs } from "./CreateDeveloperToolProficiencyArgs";
import { UpdateDeveloperToolProficiencyArgs } from "./UpdateDeveloperToolProficiencyArgs";
import { DeleteDeveloperToolProficiencyArgs } from "./DeleteDeveloperToolProficiencyArgs";
import { Developer } from "../../developer/base/Developer";
import { ProficiencyLevel } from "../../proficiencyLevel/base/ProficiencyLevel";
import { Tool } from "../../tool/base/Tool";
import { DeveloperToolProficiencyService } from "../developerToolProficiency.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeveloperToolProficiency)
export class DeveloperToolProficiencyResolverBase {
  constructor(
    protected readonly service: DeveloperToolProficiencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DeveloperToolProficiency",
    action: "read",
    possession: "any",
  })
  async _developerToolProficienciesMeta(
    @graphql.Args() args: DeveloperToolProficiencyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DeveloperToolProficiency])
  @nestAccessControl.UseRoles({
    resource: "DeveloperToolProficiency",
    action: "read",
    possession: "any",
  })
  async developerToolProficiencies(
    @graphql.Args() args: DeveloperToolProficiencyFindManyArgs
  ): Promise<DeveloperToolProficiency[]> {
    return this.service.developerToolProficiencies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DeveloperToolProficiency, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DeveloperToolProficiency",
    action: "read",
    possession: "own",
  })
  async developerToolProficiency(
    @graphql.Args() args: DeveloperToolProficiencyFindUniqueArgs
  ): Promise<DeveloperToolProficiency | null> {
    const result = await this.service.developerToolProficiency(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DeveloperToolProficiency)
  @nestAccessControl.UseRoles({
    resource: "DeveloperToolProficiency",
    action: "create",
    possession: "any",
  })
  async createDeveloperToolProficiency(
    @graphql.Args() args: CreateDeveloperToolProficiencyArgs
  ): Promise<DeveloperToolProficiency> {
    return await this.service.createDeveloperToolProficiency({
      ...args,
      data: {
        ...args.data,

        developer: args.data.developer
          ? {
              connect: args.data.developer,
            }
          : undefined,

        proficiencyLevel: args.data.proficiencyLevel
          ? {
              connect: args.data.proficiencyLevel,
            }
          : undefined,

        tool: args.data.tool
          ? {
              connect: args.data.tool,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DeveloperToolProficiency)
  @nestAccessControl.UseRoles({
    resource: "DeveloperToolProficiency",
    action: "update",
    possession: "any",
  })
  async updateDeveloperToolProficiency(
    @graphql.Args() args: UpdateDeveloperToolProficiencyArgs
  ): Promise<DeveloperToolProficiency | null> {
    try {
      return await this.service.updateDeveloperToolProficiency({
        ...args,
        data: {
          ...args.data,

          developer: args.data.developer
            ? {
                connect: args.data.developer,
              }
            : undefined,

          proficiencyLevel: args.data.proficiencyLevel
            ? {
                connect: args.data.proficiencyLevel,
              }
            : undefined,

          tool: args.data.tool
            ? {
                connect: args.data.tool,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DeveloperToolProficiency)
  @nestAccessControl.UseRoles({
    resource: "DeveloperToolProficiency",
    action: "delete",
    possession: "any",
  })
  async deleteDeveloperToolProficiency(
    @graphql.Args() args: DeleteDeveloperToolProficiencyArgs
  ): Promise<DeveloperToolProficiency | null> {
    try {
      return await this.service.deleteDeveloperToolProficiency(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Developer, {
    nullable: true,
    name: "developer",
  })
  @nestAccessControl.UseRoles({
    resource: "Developer",
    action: "read",
    possession: "any",
  })
  async getDeveloper(
    @graphql.Parent() parent: DeveloperToolProficiency
  ): Promise<Developer | null> {
    const result = await this.service.getDeveloper(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProficiencyLevel, {
    nullable: true,
    name: "proficiencyLevel",
  })
  @nestAccessControl.UseRoles({
    resource: "ProficiencyLevel",
    action: "read",
    possession: "any",
  })
  async getProficiencyLevel(
    @graphql.Parent() parent: DeveloperToolProficiency
  ): Promise<ProficiencyLevel | null> {
    const result = await this.service.getProficiencyLevel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tool, {
    nullable: true,
    name: "tool",
  })
  @nestAccessControl.UseRoles({
    resource: "Tool",
    action: "read",
    possession: "any",
  })
  async getTool(
    @graphql.Parent() parent: DeveloperToolProficiency
  ): Promise<Tool | null> {
    const result = await this.service.getTool(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
