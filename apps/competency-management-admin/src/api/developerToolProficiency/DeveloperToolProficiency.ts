import { Developer } from "../developer/Developer";
import { ProficiencyLevel } from "../proficiencyLevel/ProficiencyLevel";
import { Tool } from "../tool/Tool";

export type DeveloperToolProficiency = {
  createdAt: Date;
  developer?: Developer | null;
  id: string;
  proficiencyLevel?: ProficiencyLevel | null;
  tool?: Tool | null;
  updatedAt: Date;
};
