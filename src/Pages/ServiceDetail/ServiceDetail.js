import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [singleUser,setSingleUser]=useState({})

    useEffect(()=>{
        const url=`http://localhost:5000/service/${serviceId}`
fetch(url)
.then(res=>res.json())
.then(data =>setSingleUser(data))
    } ,[])
    console.log(singleUser);
    
    return (
        <div>
            <h2>Welcome to detail: {singleUser.name}</h2>
            <img src={singleUser.img} alt="" />
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;