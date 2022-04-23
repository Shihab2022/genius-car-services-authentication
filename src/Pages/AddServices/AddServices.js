import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url='http://localhost:5000/service';
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result=>console.log(result))
    };
    return (
        <div>
           <form className="d-flex mx-auto mt-5  flex-column w-50 justify-content-center" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Your name" className="mb-2" {...register("name", { required: true, maxLength: 20 })} />
      <textarea {...register("description")} />
      <input placeholder="number" className="mb-2" type="number" {...register("price")} />
      <input placeholder="Your image url" className="mb-2" type="text" {...register("img")} />
      <input value='Your service' className="mb-2" type="submit" />
    </form>
        </div>
    );
};

export default AddServices;