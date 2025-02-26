import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SpinnerBox from "../shared/SpinnerBox";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        const foundProduct = data.find((p) => p.id === parseInt(id));
        if (!foundProduct) throw new Error("Product not found");

        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div>
        <SpinnerBox />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <>
      <Navbar />
      <div className="h-[500px] flex flex-row gap-x-[40px] justify-center items-center">
        <img
          className="max-h-[400px]"
          src={product.image_link}
          alt={product.name}
        />
        <div className="flex flex-col items-start">
          <h1 className="product-detail-name text-[24px] font-bold">
            {product.name}
          </h1>
          <p className="w-[400px] text-[16px] font-light">
            {product.description}
          </p>
          <h3 className="text-[18px] font-extralight product-details-price">
            ${product.price}
          </h3>
          {product.product_colors && product.product_colors.length > 0 && (
            <div className="mb-[30px]">
              <h4 className="text-[#e00085] text-[18px] font-extralight product-details-price">
                Colors:
              </h4>

              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-extralight product-details-price ">
                  {product.product_colors.map((el) => el.colour_name).join(",")}
                </p>
                <div className="flex gap-1 max-w-[600px] flex-wrap">
                  {product?.product_colors?.map((el, index) => (
                    <div
                      key={index}
                      className="w-[40px] h-[40px] rounded-full border-2"
                      style={{
                        backgroundColor: el.hex_value,
                        borderColor:
                          color === el.hex_value ? "black" : "transparent",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <Link
            to="/products"
            className="back-button duration-300 ease-in hover:bg-white hover:border-1 hover:border-[#e00085] hover:text-[#e00085] flex items-center justify-center bg-[#e00085] text-[17px] w-[200px] h-[40px] text-white"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
