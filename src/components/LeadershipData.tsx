/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { getLeadershipDataByCountries } from '../services/api.ts';
import { Leadership } from '../types';

interface LeadershipDataProps {
  selectedCountries: string[];
}

const LeadershipData: React.FC<LeadershipDataProps> = ({ selectedCountries }) => {
  const [data, setData] = useState<Leadership[]>([]);
  const [page, setPage] = useState(1);
  const [totalRegisters, setTotalRegisters] = useState(0);
  const rowsPerPage = 20;

  useEffect(() => {
    const getData = async () => {
      if (selectedCountries.length > 0) {
        const leadershipData = await getLeadershipDataByCountries(selectedCountries, page, rowsPerPage);
        setData(leadershipData.data);
        setTotalRegisters(leadershipData.metadata.row_count);
      }
    };
    getData();
  }, [selectedCountries, page]);

  const totalPages = Math.ceil(totalRegisters / rowsPerPage);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.country_name}</Text>
              <Text style={styles.cell}>{item.performance_oriented}</Text>
              <Text style={styles.cell}>{item.autocratic}</Text>
              <Text style={styles.cell}>{item.modesty}</Text>
              <Text style={styles.cell}>{item.charisma}</Text>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.row}>
              <Text style={styles.header}>Country Name</Text>
              <Text style={styles.header}>Performance</Text>
              <Text style={styles.header}>Autocratic</Text>
              <Text style={styles.header}>Face Saver</Text>
              <Text style={styles.header}>Diplomatic</Text>
            </View>
          )}
        />
      ) : (
        <Text>No data available for the selected countries.</Text>
      )}
      <View style={styles.bottom}>
        <Button
          onPress={handlePreviousPage}
          disabled={page === 1}
          title="Previous"
        />
        <Text style={styles.pages}>
          Page {page} of {totalPages}
        </Text>
        <Button
          onPress={handleNextPage}
          disabled={page === totalPages}
          title="Next"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pages: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    paddingVertical: 4,
    fontSize: 9,
    flex: 1,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  header: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 9,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#000'
  },
});

export default LeadershipData;
