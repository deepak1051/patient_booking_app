import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {api} from '../../config/api';

const AddServiceScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await api.post('/services', {
        name,
        description,
        doctorName,
      });

      setIsLoading(false);
      navigation.navigate('AdminScreen');
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(error.response?.data?.message || error.message);
    }
  };

  return (
    <SafeAreaView className="p-4 flex-1">
      <ScrollView>
        {/* <View className="bg-slate-500 p-4 text-center rounded my-2 shadow">
          <Text className="text-white text-center text-2xl">Booking Form</Text>
        </View> */}
        <View className="my-3">
          <Text className="text-gray-800">Service Name</Text>
          <TextInput
            inputMode="text"
            className="border rounded border-gray-800 p-2"
            placeholder="Enter service name"
            value={name}
            onChangeText={prev => setName(prev)}
          />
        </View>

        <View className="my-3">
          <Text className="text-gray-800">Service Description</Text>
          <TextInput
            // inputMode="numeric"
            className="border rounded border-gray-800 p-2"
            placeholder="Enter Service Description"
            value={description}
            onChangeText={prev => setDescription(prev)}
          />
        </View>

        <View className="my-3">
          <Text className="text-gray-800">Doctor Name</Text>
          <TextInput
            // inputMode="numeric"
            className="border rounded border-gray-800 p-2"
            placeholder="Enter Doctor Name"
            value={doctorName}
            onChangeText={prev => setDoctorName(prev)}
          />
        </View>

        {error && (
          <Text className="bg-red-200 p-4 border border-red-400 rounded">
            {error}
          </Text>
        )}

        <Pressable
          disabled={isLoading}
          onPress={handleSubmit}
          className="bg-teal-400 p-4 rounded mt-4">
          <Text className="text-xl text-white text-center">
            {isLoading ? 'Submitting...' : 'Submit'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddServiceScreen;

const styles = StyleSheet.create({});
