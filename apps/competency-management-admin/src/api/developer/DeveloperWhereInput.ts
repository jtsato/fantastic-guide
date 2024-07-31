import { DeveloperToolProficiencyListRelationFilter } from "../developerToolProficiency/DeveloperToolProficiencyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeveloperWhereInput = {
  developerToolProficiencies?: DeveloperToolProficiencyListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
