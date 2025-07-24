import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/navBar.css";
import imgNav from "../public/ImgComponents/iconoNav.png";

function Navbar({ allProducts, setAllProducts }) {
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
                            class='d-inline-block align-text-top'
                        />
                        <h5>Ecomers</h5>
                    </a>

                    <button
                        className='carrito'
                        type='button'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvasRight'
                        aria-controls='offcanvasRight'
                    >
                        <AiOutlineShoppingCart className='icon' />
                    </button>

                    <div
                        className='offcanvas offcanvas-end '
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
                            {
                            allProducts.length ? (
                                <>
                                    {allProducts.map(product =>(<div key={product.id}>
                                        <p>{product.NombreProduc}</p>
                                        <p>{product.Precio}</p>

                                    </div>))}
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
