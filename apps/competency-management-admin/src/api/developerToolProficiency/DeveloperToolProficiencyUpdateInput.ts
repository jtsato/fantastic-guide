import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { ProficiencyLevelWhereUniqueInput } from "../proficiencyLevel/ProficiencyLevelWhereUniqueInput";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type DeveloperToolProficiencyUpdateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  proficiencyLevel?: ProficiencyLevelWhereUniqueInput | null;
  tool?: ToolWhereUniqueInput | null;
};
