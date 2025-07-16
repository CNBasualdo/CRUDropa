import { useEffect, useState } from "react";
import { productsapi } from "../api/products.api.jsx";
import "../styles/PagProducts.css";
import "../styles/buscador.css";
import { AiOutlineSearch } from "react-icons/ai";
import ProductCard from "../components/ProductCard";

function PagProducts() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadProducts() {
            const res = await productsapi();
            setProducts(res.data);
        }
        loadProducts();
    }, []);

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
            <div className="topPages">
                <div className='buscador form-control '>
                    <input
                        placeholder='Buscar'
                        type='text'
                        value={search}
                        onChange={searcher}
                    />
                    <AiOutlineSearch className="iconBus" />
                </div>
            </div>

            <div className='contProd'>
                <div className='productos'>
                    {results.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default PagProducts;
