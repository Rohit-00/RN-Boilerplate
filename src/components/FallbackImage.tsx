import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageProps } from 'react-native';



export default function FallbackImage({ source, fallbackSource, style }:any) {
  const [imgSource, setImgSource] = useState(source);

  const handleError = () => {
    setImgSource(fallbackSource);
  };

  return (
    <Image
      source={imgSource}
      style={style}
      
      onError={handleError}
      
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});


