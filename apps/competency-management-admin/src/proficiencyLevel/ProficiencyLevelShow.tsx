import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEVELOPER_TITLE_FIELD } from "../developer/DeveloperTitle";
import { PROFICIENCYLEVEL_TITLE_FIELD } from "./ProficiencyLevelTitle";
import { TOOL_TITLE_FIELD } from "../tool/ToolTitle";

export const ProficiencyLevelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="levelName" source="levelName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DeveloperToolProficiency"
          target="proficiencyLevelId"
          label="DeveloperToolProficiencies"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
