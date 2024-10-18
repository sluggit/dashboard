import React, { useEffect } from 'react';

const FetchComponent = ({ url, options, setData }) => {
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(JSON.stringify(result, null, 2));
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
        };
    }

    fetchData();
  }, [url, options, setData]);

  return <div>Fetching data...</div>;
};

export default FetchComponent;