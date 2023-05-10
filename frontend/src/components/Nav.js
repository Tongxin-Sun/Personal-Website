import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillDatabase } from 'react-icons/ai';
import { FaBookOpen, FaShoppingCart } from 'react-icons/fa';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

function Nav() {
    return (
        <nav>
            <Link to="/"><AiFillHome/>Home</Link>
            {/*<Link to="/contact">Contact</Link>*/}
            <Link to="/log"><AiFillDatabase/>Activity</Link>
            <Link to="../topics"><FaBookOpen />Topics</Link>
            <Link to="../gallery"><MdPhotoSizeSelectActual />Gallery</Link>
            <Link to="../staff"><BsFillPeopleFill/>Staff</Link>
            <Link to="../order"><FaShoppingCart/>Order</Link>
        </nav>
    );
}

export default Nav;