import { useState, useEffect } from 'react';
import { Container, Title, Button, Text } from '@mantine/core';
import api from './api/axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await api.get('myapp/hello/');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container size="sm" mt={40}>
      <Title order={1}>Axios Functionality</Title>
      <Button onClick={fetchMessage} mt={20}>
        Fetch Message from Django
      </Button>
      {message && <Text mt={20}>{message}</Text>}
    </Container>
  );
}

export default App;
