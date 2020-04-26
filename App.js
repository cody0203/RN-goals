import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View } from 'react-native';

import AddingForm from './modules/AddingForm';
import GoalList from './modules/GoalList';

export default function App() {
  const [goalInput, setGoalInput] = useState(undefined);
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChangeInput = (enteredText) => {
    setGoalInput(enteredText);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleAddGoal = () => {
    setGoals([...goals, { key: Math.random().toString(), value: goalInput }]);
    setGoalInput(undefined);
    handleCloseModal();
  };

  const onDeleteGoal = (key) => {
    const filteredGoals = goals.filter((goal) => goal.key !== key);
    setGoals([...filteredGoals]);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={handleOpenModal} />
      <AddingForm
        handleChangeInput={handleChangeInput}
        handleAddGoal={handleAddGoal}
        goalInput={goalInput}
        isModalVisible={isModalVisible}
        handleCloseModal={handleCloseModal}
      />
      <GoalList goals={goals} onDeleteGoal={onDeleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
