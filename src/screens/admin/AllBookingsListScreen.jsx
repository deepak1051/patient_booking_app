import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api} from '../../config/api';

const AllBookingsListScreen = () => {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await api.get('/bookings');
        setBookingList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <View className="p-4 flex-1">
      <Text className="text-3xl text-white text-center bg-teal-600 p-2 rounded">
        All Bookings
      </Text>

      <FlatList
        data={bookingList}
        renderItem={({item}) => (
          <View className="bg-slate-600 p-3 text-center rounded my-2 shadow flex flex-col ">
            <Text className="text-xl text-white">{item.patientName}</Text>
            <Text className="text-white text-base">phone: {item.phone}</Text>
            <Text className="text-white text-base">
              service: {item.service}
            </Text>
            <Text className="text-white text-base">
              Doctor Name: {item.doctor}
            </Text>
            <Text className="text-white text-base">
              Date: {new Date(item.date).toLocaleDateString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllBookingsListScreen;

const styles = StyleSheet.create({});
