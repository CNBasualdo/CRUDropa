import { useEffect, useState } from "react";
import { productsapi } from "../api/products.api";
import "../styles/PagProducts.css";
import ProductCard from "../components/ProductCard";

function PagProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const res = await productsapi();
            setProducts(res.data);
        }
        loadProducts();
    }, []);

    return (
        <div className="contProd">
            <div className='productos'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default PagProducts;
