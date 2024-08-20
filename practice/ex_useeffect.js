import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <View>
      <Text>Data: {data ? data.title : 'Loading...'}</Text>
    </View>
  );
};

export default DataFetcher;
