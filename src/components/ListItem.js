import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const ListItem = ({ employee }) => {
  return (
    <CardSection>
      <Text style={styles.titleStyle}>{employee.name}</Text>
    </CardSection>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
