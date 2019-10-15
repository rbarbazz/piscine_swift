import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ImageLoader from './ImageLoader';

const initialData = [
  {
    imageUrl:
      'https://images-assets.nasa.gov/image/NHQ201910100016/NHQ201910100016~orig.tif',
  },
  {
    imageUrl:
      'https://images-assets.nasa.gov/image/KSC-20191010-PH-CSH01_0105/KSC-20191010-PH-CSH01_0105~orig.jpg',
  },
  {
    imageUrl:
      'https://images-assets.nasa.gov/image/KSC-20191010-PH-FWM01_0054/KSC-20191010-PH-FWM01_0054~orig.JPG',
  },
  {
    imageUrl: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg',
  },
  {
    imageUrl:
      'https://images-assets.nasa.gov/image/AFRC2019-0242-60/AFRC2019-0242-60~orig.jpg',
  },
];

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {initialData.map((item, index) => (
            <ImageLoader key={`imageloader-${index}`} item={item} />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
