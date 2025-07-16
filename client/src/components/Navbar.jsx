import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/navBar.css";
import imgNav from "../public/ImgComponents/iconoNav.png";

function Navbar() {
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



                    <button className='carrito'>
                        <AiOutlineShoppingCart className='icon' />
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
