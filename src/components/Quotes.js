import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Function to fetch a random quote
    const fetchRandomQuote = async () => {
      try {
        const response = await axios.get('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote', {
          params: {
            token: 'ipworld.info'
          },
          headers: {
            'X-RapidAPI-Key': '3ed78dc54amsh63cc0c93de78278p10452ajsn97d4e4ef3535',
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
          }
        });

        // Update the state with the new quote
        setQuote(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch a random quote initially
    fetchRandomQuote();

    // Set up an interval to fetch a new quote every 30 seconds
    const intervalId = setInterval(() => {
      fetchRandomQuote();
    }, 30000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Quotes;