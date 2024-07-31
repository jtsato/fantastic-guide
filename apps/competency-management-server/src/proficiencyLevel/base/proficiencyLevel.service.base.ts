/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ProficiencyLevel as PrismaProficiencyLevel,
  DeveloperToolProficiency as PrismaDeveloperToolProficiency,
} from "@prisma/client";

export class ProficiencyLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProficiencyLevelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.proficiencyLevel.count(args);
  }

  async proficiencyLevels(
    args: Prisma.ProficiencyLevelFindManyArgs
  ): Promise<PrismaProficiencyLevel[]> {
    return this.prisma.proficiencyLevel.findMany(args);
  }
  async proficiencyLevel(
    args: Prisma.ProficiencyLevelFindUniqueArgs
  ): Promise<PrismaProficiencyLevel | null> {
    return this.prisma.proficiencyLevel.findUnique(args);
  }
  async createProficiencyLevel(
    args: Prisma.ProficiencyLevelCreateArgs
  ): Promise<PrismaProficiencyLevel> {
    return this.prisma.proficiencyLevel.create(args);
  }
  async updateProficiencyLevel(
    args: Prisma.ProficiencyLevelUpdateArgs
  ): Promise<PrismaProficiencyLevel> {
    return this.prisma.proficiencyLevel.update(args);
  }
  async deleteProficiencyLevel(
    args: Prisma.ProficiencyLevelDeleteArgs
  ): Promise<PrismaProficiencyLevel> {
    return this.prisma.proficiencyLevel.delete(args);
  }

  async findDeveloperToolProficiencies(
    parentId: string,
    args: Prisma.DeveloperToolProficiencyFindManyArgs
  ): Promise<PrismaDeveloperToolProficiency[]> {
    return this.prisma.proficiencyLevel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .developerToolProficiencies(args);
  }
}
