import * as React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button, View } from 'react-native';

import DeathItem from './DeathItem';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface DeathItem {
  personName: string;
  causeOfDeath: string;
  dateOfDeath: Date;
}

const initialData = [
  {
    personName: 'fle-roy',
    causeOfDeath: 'Puked in his own mouth',
    dateOfDeath: new Date(),
  },
  {
    personName: 'msamak',
    causeOfDeath: 'Shabat overload',
    dateOfDeath: new Date(),
  },
  {
    personName: 'rbarbazz',
    causeOfDeath: 'Way too cool',
    dateOfDeath: new Date(),
  },
];

class Home extends React.Component<
  { navigation: Navigation },
  { data: DeathItem[] }
> {
  static navigationOptions = ({ navigation }: { navigation: Navigation }) => {
    return {
      title: 'Death Note',
      visible: false,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('DeathItemCreation')}
          title="New"
          color="#fff"
        />
      ),
    };
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.mainContainer}>
          <View style={{ flex: 9 }}>
            <FlatList
              keyExtractor={({ personName }, index) => `${personName}${index}`}
              data={[...initialData]}
              renderItem={({ item }) => (
                <DeathItem
                  dateOfDeath={item.dateOfDeath.toString()}
                  personName={item.personName}
                  causeOfDeath={item.causeOfDeath}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: 'black' },
});

export default Home;
