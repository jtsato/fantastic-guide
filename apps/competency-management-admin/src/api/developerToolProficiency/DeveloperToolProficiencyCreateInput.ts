import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { ProficiencyLevelWhereUniqueInput } from "../proficiencyLevel/ProficiencyLevelWhereUniqueInput";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type DeveloperToolProficiencyCreateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  proficiencyLevel?: ProficiencyLevelWhereUniqueInput | null;
  tool?: ToolWhereUniqueInput | null;
};
