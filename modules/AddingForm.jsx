import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const AddingForm = ({
  handleChangeInput,
  handleAddGoal,
  goalInput,
  isModalVisible,
  handleCloseModal,
}) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={goalInput}
          onChangeText={handleChangeInput}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={handleCloseModal}
              onPress={handleCloseModal}
              color="red"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '40%',
  },
});

export default AddingForm;
