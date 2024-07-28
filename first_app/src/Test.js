import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test;
