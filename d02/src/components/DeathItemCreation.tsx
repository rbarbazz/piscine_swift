import * as React from 'react';
import {
  Button,
  DatePickerIOS,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

class DeathItemCreation extends React.Component<
  { navigation: Navigation },
  {}
> {
  state = {
    personName: '',
    causeOfDeath: '',
    dateOfDeath: new Date(),
  };
  static navigationOptions = ({ navigation }: { navigation: Navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Add a Death',
      headerLeft: (
        <Button onPress={() => navigation.goBack()} title="Back" color="#fff" />
      ),
      headerRight: (
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}
          title="Done"
          color="#fff"
        />
      ),
    };
  };

  render() {
    const { personName, causeOfDeath, dateOfDeath } = this.state;
    return (
      <>
        <SafeAreaView style={styles.mainContainer}>
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={require('./ancient-antique-art.jpg')}
          >
            <View style={{ flex: 1 }}>
              <TextInput
                multiline={false}
                style={styles.textInputField}
                onChangeText={text =>
                  this.setState(prevState => ({
                    ...prevState,
                    personName: text,
                  }))
                }
                value={personName}
                placeholder="Name"
                placeholderTextColor="black"
              />
              <TextInput
                multiline
                style={styles.textInputField}
                onChangeText={text =>
                  this.setState(prevState => ({
                    ...prevState,
                    causeOfDeath: text,
                  }))
                }
                value={causeOfDeath}
                placeholder="Cause of Death"
                placeholderTextColor="black"
              />
              <DatePickerIOS
                date={dateOfDeath}
                onDateChange={date =>
                  this.setState(prevState => ({
                    ...prevState,
                    dateOfDeath: date,
                  }))
                }
              />
            </View>
          </ImageBackground>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  textInputField: {
    fontSize: 20,
    height: 40,
    marginVertical: 20,
  },
});

export default DeathItemCreation;
