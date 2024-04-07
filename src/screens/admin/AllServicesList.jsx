import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api} from '../../config/api';

const AllServicesList = () => {
  const [services, setServices] = useState([]);

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

  return (
    <SafeAreaView className="p-4 flex-1">
      <View className="  flex flex-col justify-center   gap-4">
        <Text className="text-3xl text-white text-center bg-slate-600 p-2 rounded">
          All Services list
        </Text>

        <FlatList
          data={services}
          renderItem={({item}) => (
            <View className="bg-slate-500 p-4 text-center rounded my-2 shadow">
              <Text className=" text-2xl italic text-teal-400 text-center font-semibold">
                {item.name}
              </Text>

              <Text className="text-white text-center text-xl">
                Doctor Name: {item.doctorName}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllServicesList;

const styles = StyleSheet.create({});
