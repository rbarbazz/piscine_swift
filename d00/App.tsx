import * as React from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [currentNumber, setCurrentNumber] = React.useState('');
  const [currentAction, setCurrentAction] = React.useState('');
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
              marginBottom: 10,
            }}>
            {currentNumber}
          </Text>
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <View style={styles.numbersContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, numberIndex) => (
              <TouchableHighlight
                key={`number-button-${numberIndex}`}
                style={{
                  ...styles.numberButton,
                  backgroundColor: 'rgb(170, 170, 170)',
                }}
                onPress={() => {
                  if (
                    currentNumber === firstNumber.toString() &&
                    currentAction === ''
                  )
                    return setCurrentNumber(number.toString());
                  currentNumber === '0'
                    ? setCurrentNumber(number.toString())
                    : setCurrentNumber(`${currentNumber}${number}`);
                }}>
                <Text style={{fontWeight: 'bold'}}>{number}</Text>
              </TouchableHighlight>
            ))}
          </View>
          <View style={styles.actionsContainer}>
            <TouchableHighlight
              style={{
                ...styles.actionButton,
                backgroundColor: 'rgb(253, 128, 35)',
              }}
              onPress={() => {
                setFirstNumber(0);
                setCurrentNumber('');
              }}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>AC</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{
                ...styles.actionButton,
                backgroundColor: 'rgb(253, 128, 35)',
              }}
              onPress={() => {
                if (currentNumber === '' || currentNumber === '0') return;
                if (currentNumber[0] === '-')
                  setCurrentNumber(`${currentNumber.slice(1)}`);
                if (currentNumber[0] !== '-')
                  setCurrentNumber(`-${currentNumber}`);
              }}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>NEG</Text>
            </TouchableHighlight>
            {['+', '*', '-', '/'].map((action, actionIndex) => (
              <TouchableHighlight
                key={`action-button-${actionIndex}`}
                style={{
                  ...styles.actionButton,
                  backgroundColor: 'rgb(253, 128, 35)',
                }}
                onPress={() => {
                  setCurrentAction(action);
                  setFirstNumber(parseInt(currentNumber));
                  setCurrentNumber('');
                }}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  {action}
                </Text>
              </TouchableHighlight>
            ))}
            <TouchableHighlight
              style={{
                ...styles.actionButton,
                backgroundColor: 'rgb(253, 128, 35)',
              }}
              onPress={() => {
                if (currentAction === '') return;
                let secondNumber: number = parseInt(currentNumber)
                let result: number = secondNumber;
                if (currentAction === '+')
                  result = firstNumber + secondNumber;
                if (currentAction === '-')
                  result = firstNumber - secondNumber;
                if (currentAction === '/')
                  result = firstNumber / secondNumber;
                if (currentAction === '*')
                  result = firstNumber * secondNumber;
                isFinite(result)
                  ? setCurrentNumber(result.toString())
                  : setCurrentNumber('Not a number');
                setCurrentAction('');
                setFirstNumber(result);
              }}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>=</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(85, 85, 85)',
    flex: 1,
  },
  numbersContainer: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  actionsContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numberButton: {
    alignItems: 'center',
    borderColor: 'rgb(85, 85, 85)',
    borderWidth: 3,
    height: '25%',
    justifyContent: 'center',
    width: '33%',
  },
  actionButton: {
    alignItems: 'center',
    borderColor: 'rgb(85, 85, 85)',
    borderWidth: 3,
    height: '25%',
    justifyContent: 'center',
    width: '50%',
  },
});

export default App;
