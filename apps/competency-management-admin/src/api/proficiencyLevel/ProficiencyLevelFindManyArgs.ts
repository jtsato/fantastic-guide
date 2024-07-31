import { ProficiencyLevelWhereInput } from "./ProficiencyLevelWhereInput";
import { ProficiencyLevelOrderByInput } from "./ProficiencyLevelOrderByInput";

export type ProficiencyLevelFindManyArgs = {
  where?: ProficiencyLevelWhereInput;
  orderBy?: Array<ProficiencyLevelOrderByInput>;
  skip?: number;
  take?: number;
};
