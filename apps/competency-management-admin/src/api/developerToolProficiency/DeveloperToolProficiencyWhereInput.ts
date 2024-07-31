import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProficiencyLevelWhereUniqueInput } from "../proficiencyLevel/ProficiencyLevelWhereUniqueInput";
import { ToolWhereUniqueInput } from "../tool/ToolWhereUniqueInput";

export type DeveloperToolProficiencyWhereInput = {
  developer?: DeveloperWhereUniqueInput;
  id?: StringFilter;
  proficiencyLevel?: ProficiencyLevelWhereUniqueInput;
  tool?: ToolWhereUniqueInput;
};
