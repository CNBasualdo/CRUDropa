import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
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

                    <div className='buscador form-control  '>
                        <input type='text' />
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </div>

                    <button className='carrito'>
                        <AiOutlineShoppingCart className='icon' />
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
