import { useEffect, useState } from "react";
import SpinnerBox from "../shared/SpinnerBox";
const FetchNyxProducts = ({ onDataLoaded }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&name=nyx%20Face%20Studio%20Master%20Hi-Light%20Booster%20Bronzer%E2%80%99"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        onDataLoaded(data.slice(7, 58));
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataLoaded]);

  if (loading) return <SpinnerBox />;
  if (error) return <div>Error: {error}</div>;

  return null;
};

export default FetchNyxProducts;
