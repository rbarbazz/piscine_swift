import React from 'react';
import { ImageBackground, View, ActivityIndicator, Alert } from 'react-native';

type ImageLoaderProps = {
  item: {
    imageUrl: string;
  };
};

const ImageLoader = ({ item }: ImageLoaderProps) => {
  const [isLoading, toggleLoading] = React.useState(true);
  console.log(isLoading);
  return (
    <View
      style={{
        width: '50%',
        height: '25%',
        backgroundColor: 'black',
      }}
    >
      <ImageBackground
        source={{ uri: item.imageUrl }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          justifyContent: 'center',
        }}
        onLoad={() => toggleLoading(false)}
        onError={() =>
          Alert.alert('Error', `Cannot access ${item.imageUrl}`, [
            { text: 'OK' },
          ])
        }
      >
        {isLoading && <ActivityIndicator size="large" color="white" />}
      </ImageBackground>
    </View>
  );
};

export default ImageLoader;
