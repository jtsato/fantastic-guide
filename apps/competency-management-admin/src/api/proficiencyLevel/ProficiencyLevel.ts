import { DeveloperToolProficiency } from "../developerToolProficiency/DeveloperToolProficiency";

export type ProficiencyLevel = {
  createdAt: Date;
  developerToolProficiencies?: Array<DeveloperToolProficiency>;
  id: string;
  levelName: string | null;
  updatedAt: Date;
};
