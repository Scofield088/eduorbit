import React, { useEffect } from 'react';
import { fetchData } from '../services/api';

const MyComponent = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      console.log(data);
    };

    getData();
  }, []);

  return <div></div>;
};

export default MyComponent;
