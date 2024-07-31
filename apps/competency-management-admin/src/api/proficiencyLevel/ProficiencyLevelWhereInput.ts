import { DeveloperToolProficiencyListRelationFilter } from "../developerToolProficiency/DeveloperToolProficiencyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProficiencyLevelWhereInput = {
  developerToolProficiencies?: DeveloperToolProficiencyListRelationFilter;
  id?: StringFilter;
  levelName?: StringNullableFilter;
};
