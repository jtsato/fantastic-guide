import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeveloperToolProficiencyServiceBase } from "./base/developerToolProficiency.service.base";

@Injectable()
export class DeveloperToolProficiencyService extends DeveloperToolProficiencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
