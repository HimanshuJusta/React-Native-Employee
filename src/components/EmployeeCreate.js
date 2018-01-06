import React, { Component } from 'react';
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, employeeCreate } = this.props;

    employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="XXX-XXX-XXXX"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={styles.containerStyle}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            {
              [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
              ].map((day, index) => (
                <Picker.Item key={index} label={day} value={day} />
              ))
            }
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    flexDirection: 'column',
    height: 300
  }
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
