import { DeveloperToolProficiency } from "../developerToolProficiency/DeveloperToolProficiency";

export type Developer = {
  createdAt: Date;
  developerToolProficiencies?: Array<DeveloperToolProficiency>;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
