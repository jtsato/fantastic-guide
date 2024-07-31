import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DeveloperTitle } from "../developer/DeveloperTitle";
import { ProficiencyLevelTitle } from "../proficiencyLevel/ProficiencyLevelTitle";
import { ToolTitle } from "../tool/ToolTitle";

export const DeveloperToolProficiencyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="developer.id"
          reference="Developer"
          label="Developer"
        >
          <SelectInput optionText={DeveloperTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="proficiencyLevel.id"
          reference="ProficiencyLevel"
          label="Proficiency Level"
        >
          <SelectInput optionText={ProficiencyLevelTitle} />
        </ReferenceInput>
        <ReferenceInput source="tool.id" reference="Tool" label="Tool">
          <SelectInput optionText={ToolTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
