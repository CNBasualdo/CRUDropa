import { useEffect, useState } from "react";
import { productsapi } from "../api/products.api";

function PagProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
         async function loadProducts() {
            const res = await  productsapi();
            setProducts(res.data);
        }
    loadProducts();   
    }, []);

    return <div>
        {products.map(product =>(
            <div key={product.id}>
                <h1>{product.NombreProduc}</h1>
                <p>{product.Detalle}</p>
                <h6>{product.Precio}</h6>
            </div>
        ))}


    </div>;
}

export default PagProducts;
