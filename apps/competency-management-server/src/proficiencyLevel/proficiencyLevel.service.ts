import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProficiencyLevelServiceBase } from "./base/proficiencyLevel.service.base";

@Injectable()
export class ProficiencyLevelService extends ProficiencyLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
