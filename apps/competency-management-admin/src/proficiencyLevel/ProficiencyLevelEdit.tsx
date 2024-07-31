import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeveloperToolProficiencyTitle } from "../developerToolProficiency/DeveloperToolProficiencyTitle";

export const ProficiencyLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="developerToolProficiencies"
          reference="DeveloperToolProficiency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeveloperToolProficiencyTitle} />
        </ReferenceArrayInput>
        <TextInput label="levelName" source="levelName" />
      </SimpleForm>
    </Edit>
  );
};
