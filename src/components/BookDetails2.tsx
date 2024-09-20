// components/BookDetails.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

interface BookDetailsProps {
  isbn: string;
}

interface BookData {
  title: string;
  authors: { name: string }[];
  covers: number[];
}

const BookDetails: React.FC<BookDetailsProps> = ({ isbn }) => {
  const [bookData, setBookData] = useState<BookData | null>(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/isbn/${isbn}.json`);
        setBookData(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBookData();
  }, [isbn]);

  if (!bookData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg` }}
        style={styles.coverImage}
      />
      <Text style={styles.title}>{bookData.title}</Text>
      <Text style={styles.author}>{bookData.authors.map(author => author.name).join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  coverImage: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BookDetails;
