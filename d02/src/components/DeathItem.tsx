import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

interface Props {
  personName: string;
  causeOfDeath: string;
  dateOfDeath: string;
}

const DeathItem = ({ personName, causeOfDeath, dateOfDeath }: Props) => {
  return (
    <>
      <View style={styles.deathItem}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ borderRadius: 5 }}
          source={require('./ancient-antique-art.jpg')}
        >
          <Text style={styles.title}>{personName}</Text>
          <Text style={styles.title}>{dateOfDeath}</Text>
          <Text style={styles.title}>{causeOfDeath}</Text>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  deathItem: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
    width: '90%',
    flex: 1,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
});

export default DeathItem;
