import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
 const handleDelete=(id)=>{
     const Proceed=window.confirm('Are you sure ?')
     if(Proceed){
         const url=`http://localhost:5000/service/${id}`;
         fetch(url,{
             method: 'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             
            const remaining=services.filter(service => service._id !==id)
            setServices(remaining)
            console.log(data)})
     }

 }

     return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;