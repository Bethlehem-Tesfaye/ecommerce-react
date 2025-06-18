import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

export const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disBtn, setDisBtn] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const [favList, setFavList] = useState([]);
  const [cartList, setCartLIst] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const [clothProducts, setClothProducts] = useState([]);
  const [count2, setCount2] = useState(0);
  const [disBtn2, setDisBtn2] = useState(false);
  const [gender, setGender] = useState("women");

  const [accesariesProduct, setAccesariesProduct] = useState([]);
  const [count3, setCount3] = useState(0);
  const [disBtn3, setDisBtn3] = useState(false);
  const [gender2, setGender2] = useState("women");

  const [phonesProducts, setPhonesProducts] = useState([]);
  const [count4, setCount4] = useState(0);
  const [disBtn4, setDisBtn4] = useState(false);

  const [laptopsProducts, setLaptopsProducts] = useState([]);
  const [count5, setCount5] = useState(0);
  const [disBtn5, setDisBtn5] = useState(false);

  async function fetchProduct() {
    if (loading) return <div>loading please wait!</div>;
    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${count * 10}`
      );
      const data = await res.json();

      //   console.log("Fetched products:", data.products);

      if (res.ok && Array.isArray(data.products) && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProduct();
    setLoading(false);
  }, [count]);

  useEffect(() => {
    if (products.length >= 200) {
      setDisBtn(true);
    } else {
      setDisBtn(false);
    }
  }, [products]);

  // FOR CATEGORIES

  // CLOTHES
  useEffect(() => {
    setClothProducts([]);
    setCount2(0);
  }, [gender]);

  async function fetchClothesProduct() {
    if (loading) return;
    setLoading(true);

    const categories =
      gender === "women"
        ? ["womens-dresses", "womens-bags", "womens-shoes"]
        : ["mens-shirts", "mens-shoes"];
    let allProducts = [];
    let num = gender === "women" ? 2 : 3;

    try {
      const responses = await Promise.all(
        categories.map((category) =>
          fetch(
            `https://dummyjson.com/products/category/${category}?limit=${num}&skip=${
              count2 * num
            }`
          ).then((res) => res.json())
        )
      );

      responses.forEach((data) => {
        if (Array.isArray(data.products) && data.products.length > 0) {
          allProducts = [...allProducts, ...data.products];
        }
      });

      setClothProducts((prev) => [...prev, ...allProducts]);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClothesProduct();
    setLoading(false);
  }, [count2, gender]);

  useEffect(() => {
    if (gender === "women" && clothProducts.length >= 15) {
      setDisBtn2(true);
    } else if (gender === "men" && clothProducts.length >= 10) {
      setDisBtn2(true);
    } else {
      setDisBtn2(false);
    }
  }, [clothProducts, gender]);

  // ACCESSORIES
  useEffect(() => {
    setAccesariesProduct([]);
    setCount3(0);
  }, [gender2]);

  async function fetchAccessariesProduct() {
    if (loading) return;
    setLoading(true);

    const categories =
      gender2 === "women"
        ? ["womens-watches", "womens-jewellery", "sunglasses"]
        : ["mens-watches", "sunglasses"];
    let allProducts = [];
    let num = gender2 === "women" ? 2 : 3;

    try {
      const responses = await Promise.all(
        categories.map((category) =>
          fetch(
            `https://dummyjson.com/products/category/${category}?limit=${num}&skip=${
              count3 * num
            }`
          ).then((res) => res.json())
        )
      );

      responses.forEach((data) => {
        if (Array.isArray(data.products) && data.products.length > 0) {
          allProducts = [...allProducts, ...data.products];
        }
      });

      setAccesariesProduct((prev) => [...prev, ...allProducts]);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAccessariesProduct();
    setLoading(false);
  }, [count3, gender2]);

  useEffect(() => {
    if (gender2 === "women" && accesariesProduct.length >= 13) {
      setDisBtn3(true);
    } else if (gender2 === "men" && accesariesProduct.length >= 11) {
      setDisBtn3(true);
    } else {
      setDisBtn3(false);
    }
  }, [accesariesProduct, gender2]);

  // PHONES

  async function FetchPhoneProducts() {
    if (loading) return <div>loading please wait!</div>;
    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/smartphones?limit=4&skip=${
          count4 * 4
        }`
      );
      const data = await res.json();

      if (res.ok && Array.isArray(data.products) && data.products.length > 0) {
        setPhonesProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    FetchPhoneProducts();
    setLoading(false);
  }, [count4]);

  useEffect(() => {
    if (phonesProducts.length >= 20) {
      setDisBtn4(true);
    } else {
      setDisBtn4(false);
    }
  }, [phonesProducts]);

  // LAPTOPS

  async function FetchLaptopProducts() {
    if (loading) return <div>loading please wait!</div>;
    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/laptops?limit=4&skip=${
          count5 * 4
        }`
      );
      const data = await res.json();

      if (res.ok && Array.isArray(data.products) && data.products.length > 0) {
        setLaptopsProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    FetchLaptopProducts();
    setLoading(false);
  }, [count5]);

  useEffect(() => {
    if (laptopsProducts.length >= 6) {
      setDisBtn5(true);
    } else {
      setDisBtn5(false);
    }
  }, [laptopsProducts]);

  return (
    <GlobalContext.Provider
      value={{
        fetchProduct,
        products,
        count,
        setCount,
        loading,
        disBtn,
        productDetails,
        setProductDetails,
        favList,
        setFavList,
        cartList,
        setCartLIst,
        cartCount,
        setCartCount,
        count2,
        setCount2,
        clothProducts,
        setClothProducts,
        disBtn2,
        setDisBtn2,
        gender,
        setGender,
        accesariesProduct,
        setAccesariesProduct,
        count3,
        setCount3,
        disBtn3,
        setDisBtn3,
        gender2,
        setGender2,
        phonesProducts,
        setPhonesProducts,
        count4,
        setCount4,
        disBtn4,
        setDisBtn4,
        laptopsProducts,
        setLaptopsProducts,
        count5,
        setCount5,
        disBtn5,
        setDisBtn5,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
