import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ToolList } from "./tool/ToolList";
import { ToolCreate } from "./tool/ToolCreate";
import { ToolEdit } from "./tool/ToolEdit";
import { ToolShow } from "./tool/ToolShow";
import { DeveloperToolProficiencyList } from "./developerToolProficiency/DeveloperToolProficiencyList";
import { DeveloperToolProficiencyCreate } from "./developerToolProficiency/DeveloperToolProficiencyCreate";
import { DeveloperToolProficiencyEdit } from "./developerToolProficiency/DeveloperToolProficiencyEdit";
import { DeveloperToolProficiencyShow } from "./developerToolProficiency/DeveloperToolProficiencyShow";
import { DeveloperList } from "./developer/DeveloperList";
import { DeveloperCreate } from "./developer/DeveloperCreate";
import { DeveloperEdit } from "./developer/DeveloperEdit";
import { DeveloperShow } from "./developer/DeveloperShow";
import { ProficiencyLevelList } from "./proficiencyLevel/ProficiencyLevelList";
import { ProficiencyLevelCreate } from "./proficiencyLevel/ProficiencyLevelCreate";
import { ProficiencyLevelEdit } from "./proficiencyLevel/ProficiencyLevelEdit";
import { ProficiencyLevelShow } from "./proficiencyLevel/ProficiencyLevelShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CompetencyManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Tool"
          list={ToolList}
          edit={ToolEdit}
          create={ToolCreate}
          show={ToolShow}
        />
        <Resource
          name="DeveloperToolProficiency"
          list={DeveloperToolProficiencyList}
          edit={DeveloperToolProficiencyEdit}
          create={DeveloperToolProficiencyCreate}
          show={DeveloperToolProficiencyShow}
        />
        <Resource
          name="Developer"
          list={DeveloperList}
          edit={DeveloperEdit}
          create={DeveloperCreate}
          show={DeveloperShow}
        />
        <Resource
          name="ProficiencyLevel"
          list={ProficiencyLevelList}
          edit={ProficiencyLevelEdit}
          create={ProficiencyLevelCreate}
          show={ProficiencyLevelShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
