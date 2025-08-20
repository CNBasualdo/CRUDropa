import { useEffect, useState } from "react";
import "../styles/PagProducts.css";
import "../styles/buscador.css";
import { AiOutlineSearch } from "react-icons/ai";
import ProductCard from "../components/ProductCard";

function PagProducts({
    products,
    allProducts,
    total,
    setTotal,
    setAllProducts,
    countProducts,
    setCountProducts,
}) {
    const [search, setSearch] = useState("");

    //funcion de busqueda´
    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e);
    };

    //metodo de filtrado
    let results = [];
    if (!search) {
        results = products;
    } else {
        results = products.filter((dato) =>
            dato.NombreProduc.toLowerCase().includes(search.toLocaleLowerCase())
        );
    }

    return (
        <>
            <div className='topPages'>
                <div className='buscador form-control '>
                    <input
                        placeholder='Buscar'
                        type='text'
                        value={search}
                        onChange={searcher}
                    />
                    <AiOutlineSearch className='iconBus' />
                </div>
                
                
            </div>
<div>{total}</div>
            <div className='contProd'>
                <div className='productos'>
                    {results.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default PagProducts;
