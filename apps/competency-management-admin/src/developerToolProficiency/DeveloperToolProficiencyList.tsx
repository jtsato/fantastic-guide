import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEVELOPER_TITLE_FIELD } from "../developer/DeveloperTitle";
import { PROFICIENCYLEVEL_TITLE_FIELD } from "../proficiencyLevel/ProficiencyLevelTitle";
import { TOOL_TITLE_FIELD } from "../tool/ToolTitle";

export const DeveloperToolProficiencyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeveloperToolProficiencies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
