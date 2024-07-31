import { DeveloperToolProficiencyCreateNestedManyWithoutDevelopersInput } from "./DeveloperToolProficiencyCreateNestedManyWithoutDevelopersInput";

export type DeveloperCreateInput = {
  developerToolProficiencies?: DeveloperToolProficiencyCreateNestedManyWithoutDevelopersInput;
  email?: string | null;
  name?: string | null;
};
