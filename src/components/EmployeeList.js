import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class EmployeeList extends Component {
  static navigationOptions = {
		headerLeft:null
	}

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
      return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('employees', state.employees);
  const employees = _.map(state.employees, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  console.log(employees);
  return { employees: employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
