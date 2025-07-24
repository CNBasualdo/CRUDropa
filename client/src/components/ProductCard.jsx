import React from "react";
import "../styles/productCard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard({ product, allProducts, setAllProducts, }) {
    
    const onAddProduct = product=>{
        setAllProducts([...allProducts,product])

    };console.log(allProducts)
    
    
    
    
    return (
        <div className='card'>
            <img src={product.ImgProd} className='card-img-top' />

            <div className='card-body'>
                <h5 className='card-title'>{product.NombreProduc}</h5>
                <p className='card-text'>{product.Detalle}</p>
            </div>

            <div className='cardMid'>
                <h6>${product.Precio}</h6>
                <h6>Cantidad:{product.Cantidad}</h6>
            </div>

            <div className='cardDown'>
                <button className='btn btn-success' onClick={()=> onAddProduct(product)}>
                    Añadir al carrito
                    <AiOutlineShoppingCart className='carIcon' />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
