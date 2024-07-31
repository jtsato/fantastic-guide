import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeveloperToolProficiencyListRelationFilter } from "../developerToolProficiency/DeveloperToolProficiencyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ToolWhereInput = {
  description?: StringNullableFilter;
  developerToolProficiencies?: DeveloperToolProficiencyListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
