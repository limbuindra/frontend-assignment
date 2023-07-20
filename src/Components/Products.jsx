import React from 'react';
import { Link } from 'react-router-dom';



const Products = ({data}) => {
    return (
        <>
            <div className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3  md:gap-3  lg:grid-cols-4 lg:gap-4 mt-6">
                {data.map((product) => {
                        const { id, image, title, price } = product;
                        return (
                            <>
                                <div >
                                    <ul >
                                        <li key={id} className="border-2 text-lg shadow-xl  rounded-md p-8 m-2 text-center ">
                                            <Link to={`/products/${id}`}>
                                                <img className="h-72 w-60" src={image} alt="" />

                                                <p className="mt-2 text-xl">
                                                    {title.substring(0, 20)}...
                                                </p>
                                                <div>
                                                    <p className="font-bold text-lg">
                                                        ${Math.round(price)}
                                                    </p>
                                                </div>
                                            </Link>
                                          
                                        </li>
                                    </ul>
                                </div>
                            </>
                        );
                    })}
            </div>
        </>
    );
};



export default Products;