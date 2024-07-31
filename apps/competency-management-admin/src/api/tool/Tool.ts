import { DeveloperToolProficiency } from "../developerToolProficiency/DeveloperToolProficiency";

export type Tool = {
  createdAt: Date;
  description: string | null;
  developerToolProficiencies?: Array<DeveloperToolProficiency>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
