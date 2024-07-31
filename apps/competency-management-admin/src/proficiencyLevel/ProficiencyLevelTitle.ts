import { ProficiencyLevel as TProficiencyLevel } from "../api/proficiencyLevel/ProficiencyLevel";

export const PROFICIENCYLEVEL_TITLE_FIELD = "levelName";

export const ProficiencyLevelTitle = (record: TProficiencyLevel): string => {
  return record.levelName?.toString() || String(record.id);
};
