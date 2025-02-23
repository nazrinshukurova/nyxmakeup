import React, { useEffect, useState } from "react";

const ProductsNyx = () => {
  const [data, setData] = useState([]);
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
        setData(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>No products found.</div>;

  const filteredLipBalms = data.filter(
    (item) => item.product_type === "bronzer"
  );
  console.log(filteredLipBalms);
  return (
    <div>
      {filteredLipBalms.map((item) => (
        <h3>{item.name}</h3>
      ))}
    </div>
  );
};

export default ProductsNyx;
