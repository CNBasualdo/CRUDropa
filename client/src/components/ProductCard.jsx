
import "../styles/productCard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard({
    product,
    allProducts,
    setAllProducts,
    setTotal,
}) {
    const onAddProduct = (product) => {

        const existingProduct = allProducts.find(item => item.id === product.id);

        if (existingProduct){
            const updateProducts = allProducts.map(item =>
                item.id === product.id 
                ? {...item, Cantidad: item.Cantidad + 1}
                : item
            );
            setAllProducts(updateProducts);

        }else{
            const newProduct = {...product, Cantidad: 1 };
            setAllProducts([...allProducts, newProduct]);

        }
            
        
    
    };


    return (
        <div className='card'>
            <img src={product.ImgProd} className='card-img-top' />

            <div className='card-body'>
                <h5 className='card-title'>{product.NombreProduc}</h5>
                <p className='card-text'>{product.Detalle}</p>
            </div>

            <div className='cardMid'>
                <h6>${product.Precio}</h6>
                <h6>Disponibles:{product.Stock}</h6>
            </div>
            <div className='cardDown'>
                <button
                    className='btn btn-success'
                    onClick={() => onAddProduct(product)}
                >
                    Añadir al carrito
                    <AiOutlineShoppingCart className='carIcon' />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
