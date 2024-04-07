import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();

  const goToPatientScreen = () => {
    navigation.navigate('PatientScreen');
  };

  const goToAdminScreen = () => {
    navigation.navigate('AdminScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.main}
        className="w-full justify-center flex flex-col items-center gap-4">
        <Pressable
          onPress={goToPatientScreen}
          className="bg-teal-500 p-4 rounded w-52">
          <Text className="text-3xl text-white text-center">Patient</Text>
        </Pressable>
        <Pressable
          className="bg-teal-500 p-4 rounded w-52"
          onPress={goToAdminScreen}>
          <Text className="text-3xl text-white text-center">Admin</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
