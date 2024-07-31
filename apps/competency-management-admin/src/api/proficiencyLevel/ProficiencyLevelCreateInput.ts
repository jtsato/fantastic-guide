import { DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput } from "./DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput";

export type ProficiencyLevelCreateInput = {
  developerToolProficiencies?: DeveloperToolProficiencyCreateNestedManyWithoutProficiencyLevelsInput;
  levelName?: string | null;
};
