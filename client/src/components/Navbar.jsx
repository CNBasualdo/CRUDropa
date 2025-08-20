import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/navBar.css";
import imgNav from "../public/ImgComponents/iconoNav.png";

function Navbar({ allProducts, total, setAllProducts,setTotal }) {

    const [active, setActive] = useState(true);


    return (
        <>
            <nav className=' navbar '>
                <div className='container'>
                    <a className='navbar-brand' href='#'>
                        <img
                            src={imgNav}
                            alt='Logo'
                            width='60'
                            height='60'
                            className='d-inline-block align-text-top'
                        />
                        <h5>Ecomers</h5>
                    </a>

                    <button
                        className='carrito'
                        type='button'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasRight'
                        aria-controls='offcanvasRight'
                        onClick={()=> setActive(!actv)}
                    >
                        <AiOutlineShoppingCart className='icon' />
                    </button>

                    <div
                        className={`offcanvas offcanvas-end ${active ? '' :'show'}` }
                        tabindex='-1'
                        id='offcanvasRight'
                        aria-labelledby='offcanvasRightLabel'
                    >
                        <div className='offcanvas-header'>
                            <h5
                                className='offcanvas-title'
                                id='offcanvasRightLabel'
                            >
                                Carrito
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='offcanvas'
                                aria-label='Close'
                            ></button>
                        </div>
                                    
                        <div className='offcanvas-body'>
                            {allProducts.length ? (
                                <>
                                    <div>
                                        {allProducts.map((product) => (
                                            <div key={product.id}>
                                                <p>{product.NombreProduc}</p>
                                                <p>${product.Precio}</p>
                                                <p>Cantidad:{product.Cantidad}</p>
                                                <div>
                                        <h5>total:</h5>
                                        <p>${total}</p>
                                    </div>
                                            </div>
                                            
                                        ))}
                                    </div>
                                    <button>Vaciar carrito</button>
                                </>
                            ) : (
                                <p>Carrito vacio</p>
                            )
                            
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
