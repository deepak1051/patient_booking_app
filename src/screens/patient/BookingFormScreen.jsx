import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import DatePicker from 'react-native-date-picker';
import Dropdown from '../../components/Dropdown';
import {api} from '../../config/api';

import {useNavigation} from '@react-navigation/native';

const BookingFormScreen = () => {
  const [date, setDate] = useState(new Date());
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [services, setServices] = useState([]);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    console.log('pressing');
    setError(null);
    setIsLoading(true);
    try {
      const {data} = await api.post('/bookings', {
        date,
        patientName,
        phone,
        service,
        doctor,
      });
      console.log(data);
      setIsLoading(false);
      navigation.navigate('PatientScreen');
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await api.get('/services');
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(services);
  const doctorsList = services?.map(item => item.doctorName);
  const servicesList = services?.map(item => item.name);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <View className="bg-slate-500 p-4 text-center rounded my-2 shadow">
          <Text className="text-white text-center text-2xl">Booking Form</Text>
        </View> */}
        <View className="my-3">
          <Text className="text-gray-800">Patient Name</Text>
          <TextInput
            inputMode="text"
            className="border rounded border-gray-800 p-2"
            placeholder="Enter patient name"
            value={patientName}
            onChangeText={prev => setPatientName(prev)}
          />
        </View>

        <View className="my-3">
          <Text className="text-gray-800">Phone</Text>
          <TextInput
            inputMode="numeric"
            className="border rounded border-gray-800 p-2"
            placeholder="Enter phone"
            value={phone}
            onChangeText={prev => setPhone(prev)}
          />
        </View>

        <View className="my-3">
          <Text className="text-gray-800">Booking Date & Time</Text>

          <Pressable>
            <Button
              title="Select Date And Time"
              onPress={() => setOpen(true)}
            />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={d => {
                setOpen(false);
                setDate(d);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </Pressable>
        </View>

        <View className="my-3">
          <Text className="text-gray-800">Service</Text>

          <Dropdown
            dropDownData={
              servicesList || [
                {title: 'Service 1', id: 1},
                {title: 'Service 2', id: 2},
                {title: 'Service 3', id: 3},
              ]
            }
            defaulTitle="Select Your Service"
            onChange={setService}
          />
        </View>

        <View className="my-2">
          <Text className="text-gray-800">Doctor</Text>
          <Dropdown
            dropDownData={
              doctorsList || [
                {title: 'Doctor 1', id: 1},
                {title: 'Doctor 2', id: 2},
                {title: 'Doctor 3', id: 3},
              ]
            }
            defaulTitle="Select Your Doctor"
            onChange={setDoctor}
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

// Patient Name:
// Phone:
// Booking Date:
// Time:
// Service:
// Doctor:

export default BookingFormScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
