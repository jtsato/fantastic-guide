import { DeveloperToolProficiencyCreateNestedManyWithoutToolsInput } from "./DeveloperToolProficiencyCreateNestedManyWithoutToolsInput";

export type ToolCreateInput = {
  description?: string | null;
  developerToolProficiencies?: DeveloperToolProficiencyCreateNestedManyWithoutToolsInput;
  name?: string | null;
};
