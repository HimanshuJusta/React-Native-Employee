import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          panHandlers={null}
          onBack={()=>(null)}
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
      </Scene>
    </Router>
  )
};

export default RouterComponent;
