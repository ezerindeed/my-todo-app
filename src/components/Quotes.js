import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({
    content: '',
    author: '',
  });

  useEffect(() => {
    // Function to fetch a random quote from the Quotable API
    const fetchRandomQuote = async () => {
        try {
          const response = await axios.get('https://api.quotable.io/random');
          const { content, author } = response.data;
          console.log('Fetched quote:', content, author);
          setQuoteData({ content, author });
        } catch (error) {
          console.error('Error fetching quote:', error);
        }
      };
      

    // Fetch an initial quote
    fetchRandomQuote();

    // Set an interval to fetch a new random quote every 30 seconds
    const intervalId = setInterval(() => {
      fetchRandomQuote();
    }, 30000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="quotes-container">
      <p>"{quoteData.content}"</p>
      <p>- {quoteData.author}</p>
    </div>
  );
};

export default Quotes;