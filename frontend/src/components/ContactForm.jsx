import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = data => console.log(data);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-12">
      <div className="card w-full max-w-lg shadow-lg bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Enter your message"
              className="textarea textarea-bordered w-full"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          <div className="form-control mt-6">
            <button className="btn bg-pink-500 text-white w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
