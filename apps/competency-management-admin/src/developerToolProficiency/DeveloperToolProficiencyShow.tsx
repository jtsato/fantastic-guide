import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DEVELOPER_TITLE_FIELD } from "../developer/DeveloperTitle";
import { PROFICIENCYLEVEL_TITLE_FIELD } from "../proficiencyLevel/ProficiencyLevelTitle";
import { TOOL_TITLE_FIELD } from "../tool/ToolTitle";

export const DeveloperToolProficiencyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Developer"
          source="developer.id"
          reference="Developer"
        >
          <TextField source={DEVELOPER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Proficiency Level"
          source="proficiencylevel.id"
          reference="ProficiencyLevel"
        >
          <TextField source={PROFICIENCYLEVEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tool" source="tool.id" reference="Tool">
          <TextField source={TOOL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
