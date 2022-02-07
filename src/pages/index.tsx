import { Center, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [dbConnections, setDbConnections] = useState<number>();

  useEffect(() => {
    fetch('/api/db-connections')
      .then((res) => res.json())
      .then((data) => setDbConnections(data.dbConnections))
      .catch(console.error);
  }, []);

  return (
    <Center h="100vh" flexDir="column">
      <Heading mb={4} color="purple.400">
        Branch development
      </Heading>

      <Text fontSize="lg" color="purple.500">
        Database connections: <b>{dbConnections}</b>
      </Text>
    </Center>
  );
}
