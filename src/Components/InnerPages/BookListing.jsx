import React from "react";
import { useNavigate } from 'react-router-dom';
import image from '../assests/images/logo.png'

const BookDetails = () => {

    const navigate = useNavigate();

    const SaveBookDetails = () => {
        navigate("/bookListing");
    }

    return (
        <div className='containers flip-card'>

            <img src={image} title="poc" className="logo" />

        </div>
    )
}

export default BookDetails