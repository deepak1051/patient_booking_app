import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const AdminScreen = () => {
  const navigation = useNavigation();

  const goToAddServiceScreen = () => {
    navigation.navigate('AddServiceScreen');
  };

  const goToAllBookingsListScreen = () => {
    navigation.navigate('AllBookingsListScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="w-full justify-center flex flex-col  gap-4">
        <Pressable
          className="bg-teal-500 p-4 rounded "
          onPress={goToAddServiceScreen}>
          <Text className="text-3xl text-white text-center">Add service</Text>
        </Pressable>

        <Pressable
          onPress={goToAllBookingsListScreen}
          className="bg-teal-500 p-4 rounded ">
          <Text className="text-3xl text-white text-center">
            All bookings list
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('AllServicesList')}
          className="bg-teal-500 p-4 rounded ">
          <Text className="text-3xl text-white text-center">
            All Services list
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
