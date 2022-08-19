import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      className={`bg-[#00CCBB] flex-1 justify-center items-center ${Platform.OS === 'ios' ? '' : 'pt-[35px]'}`}
    >
      <Animatable.Image
        source={require('../assets/food_delivery.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
