/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { fetchCountries } from '../services/api.ts';
import { Country } from '../types';

interface CountryListProps {
  selectedCountries: string[];
  onSelectCountry: (country: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ onSelectCountry, selectedCountries }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  return (
    <FlatList
      data={countries}
      keyExtractor={(item) => item.country}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelectCountry(item.country)}
          style={{
            padding: 10,
            marginVertical: 5,
            backgroundColor: selectedCountries.includes(item.country) ? 'lightblue' : 'white',
          }}
        >
          <Text style={{ color: "#000" }}>{item.country_name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CountryList;
