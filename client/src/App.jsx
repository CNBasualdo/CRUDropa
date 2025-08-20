import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PagProducts from "./pages/PagProducts";
import { productsapi } from "./api/products.api";

function App() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    useEffect(() => {
        async function loadProducts() {
            const res = await productsapi();
            setProducts(res.data);
        }
        loadProducts();
    }, []);

    useEffect(() => {
        const newTotal = allProducts.reduce(
            (acc, item) => acc + item.Precio * item.Cantidad,
            0
        );
        setTotal(newTotal);

        const newCount = allProducts.reduce(
            (acc, item) => acc + item.Cantidad,
            0
        );
        setCountProducts(newCount);
    }, [allProducts]);

    return (
        <>
            <Navbar
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            <PagProducts
                products={products}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
        </>
    );
}

export default App;
