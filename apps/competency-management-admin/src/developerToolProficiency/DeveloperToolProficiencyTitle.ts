import { DeveloperToolProficiency as TDeveloperToolProficiency } from "../api/developerToolProficiency/DeveloperToolProficiency";

export const DEVELOPERTOOLPROFICIENCY_TITLE_FIELD = "id";

export const DeveloperToolProficiencyTitle = (
  record: TDeveloperToolProficiency
): string => {
  return record.id?.toString() || String(record.id);
};
