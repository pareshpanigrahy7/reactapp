import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

 

export default function App() {

 

  const [enteredName, setEnteredName] = useState('');
  const [enteredDegination, setEnteredDegination] = useState('');
  const [enteredAge, setEnteredAge] = useState();
  const [enteredSpecialization, setEnteredSpecialization] = useState('');
  const [enteredAnnualIncome, setEnteredIncome] = useState();
  const [empName, setEmpName] = useState([]);
  const [empDegination, setEmpDegination] = useState([]);
  const [empAge, setEmpAge] = useState([]);
  const [empSpecialization, setEmpSpecialization] = useState([]);
  const [empSalary, setEmpSalary] = useState([]);

 

  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText);
  };
  const addNameHandler = () => {
    setEmpName(nameOfEmp => [nameOfEmp, enteredName]);
  };

 

  const deginationInputHandler = (enteredText) => {
    setEnteredDegination(enteredText);
  };
  const addDesignationHandler = () => {
    setEmpDegination(degOfEmp => [degOfEmp, enteredDegination]);
  };

 

  const ageInputHandler = (enteredText) => {
    setEnteredAge(enteredText);
  };
  const addAgeHandler = () => {
    setEmpAge(ageOfEmp => [ageOfEmp, enteredAge]);
  };

 

  const specializationInputHandler = (enteredText) => {
    setEnteredSpecialization(enteredText);
  };
  const addSpecializationHandler = () => {
    setEmpSpecialization(specializationOfEmp => [specializationOfEmp, enteredSpecialization]);
  };

 

  const incomeInputHandler = (enteredText) => {
    setEnteredIncome(enteredText);
  };
  const addIncomeHandler = () => {
    setEmpSalary(incomeOfEmp => [incomeOfEmp, enteredAnnualIncome]);
  };

 


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your employee name :" style={styles.input}
          onChangeText={nameInputHandler} value={enteredName} />
        <Button title="Add" onPress={addNameHandler} />

 

      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your degisnation :" style={styles.input}
          onChangeText={deginationInputHandler} value={enteredDegination} />
        <Button title="Add" onPress={addDesignationHandler} />

 

      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your age :" style={styles.input}
          onChangeText={ageInputHandler} value={enteredAge} />
        <Button title="Add" onPress={addAgeHandler} />

 

      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your Specialization :" style={styles.input}
          onChangeText={specializationInputHandler} value={enteredSpecialization} />
        <Button title="Add" onPress={addSpecializationHandler} />

 

      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your annual income :" style={styles.input}
          onChangeText={incomeInputHandler} value={enteredAnnualIncome} />
        <Button title="Add" onPress={addIncomeHandler} />

 

      </View>
      <View>
        {empName.map((name) => <Text>{name}</Text>)}
      </View>
      <View>
        {empDegination.map((degn) => <Text>{degn}</Text>)}
      </View>
      <View style={styles.TextInput}>
        {empAge.map((ageOfEmp) => <Text>{ageOfEmp}</Text>)}
      </View>
      <View>
        {empSpecialization.map((spelz) => <Text>{spelz}</Text>)}
      </View>
      <View>
        {empSalary.map((incomeOfEmp) => <Text>{incomeOfEmp}</Text>)}
      </View>
    </View>
  );
}

 

const styles = StyleSheet.create({
  screen: { paddingBottom: 2, backgroundColor: 'limegreen', padding: 50 },
  inputContainer: { padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { width: '80%', borderColor: 'red', borderWidth: 2, padding: 10 }
});