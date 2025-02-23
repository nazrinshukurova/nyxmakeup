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
        setData(data.slice(7, 58));
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

  return (
    <div className="flex flex-wrap justify-between items-center gap-2.5 mt-10">
      {data?.map((item) => (
        <div
          key={item.id}
          className="product-card flex flex-col items-center justify-center"
        >
          <img
            className="max-h-[380px]"
            src={item.image_link}
            alt={item.name}
          />
          <h3 className="product-name text-[0.875rem] font-bold">
            {item.name}
          </h3>
          <p className="w-[200px] text-[0.75rem] ">
            {item.description.slice(0, 60)}...
          </p>

          {item.product_colors && item.product_colors.length > 0 ? (
            <h4 className="text-[#e00085] text-[0.75rem] flex flex-col gap-0.5 w-[200px]">
              Colors:
              {item.product_colors
                .map((el) => el.colour_name)
                .slice(0, 7)
                .join(", ")}
            </h4>
          ) : null}
          <h3 className="text-[0.875rem] font-bold ">${item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductsNyx;
