import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const GoalList = ({ goals, onDeleteGoal }) => {
  return (
    <FlatList
      style={styles.list}
      data={goals}
      renderItem={(itemData) => (
        <TouchableOpacity onPress={() => onDeleteGoal(itemData.item.key)}>
          <View style={styles.item}>
            <Text>{itemData.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 24,
    paddingRight: 24,
  },
  item: {
    padding: 24,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalList;
