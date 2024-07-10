/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text } from 'react-native';
import CountryList from './src/components/CountryList';
import LeadershipData from './src/components/LeadershipData';

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showData, setShowData] = useState(false);

  const handleSelectCountry = (country: string) => {
    setSelectedCountries(prevSelected =>
      prevSelected.includes(country)
        ? prevSelected.filter(c => c !== country)
        : [...prevSelected, country],
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {showData ? (
        <View style={{ flex: 1 }}>
          <Button title="Back" onPress={() => setShowData(false)} />
          <LeadershipData selectedCountries={selectedCountries} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 16 }}>
            Choose Countries
          </Text>
          <CountryList
            onSelectCountry={handleSelectCountry}
            selectedCountries={selectedCountries}
          />
          <Button
            title="See Data"
            onPress={() => setShowData(true)}
            disabled={selectedCountries.length === 0}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
