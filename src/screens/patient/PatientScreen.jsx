import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const PatientScreen = () => {
  const navigation = useNavigation();
  const goToBookingFormScreen = () => {
    navigation.navigate('BookingFormScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          className="bg-teal-400 p-4 rounded mb-4"
          onPress={goToBookingFormScreen}>
          <Text className="text-white font-semibold text-2xl">
            Book appointment
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AllBookingsListScreen')}
          className="bg-pink-400 p-4 rounded">
          <Text className="text-white font-semibold text-2xl">
            Check my appointments
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
