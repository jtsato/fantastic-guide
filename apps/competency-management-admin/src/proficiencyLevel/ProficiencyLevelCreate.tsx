import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeveloperToolProficiencyTitle } from "../developerToolProficiency/DeveloperToolProficiencyTitle";

export const ProficiencyLevelCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
