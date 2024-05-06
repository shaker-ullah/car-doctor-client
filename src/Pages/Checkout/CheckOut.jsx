import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const services = useLoaderData()
    // console.log(services)
    const {title, _id, service_id} = services
    return (
        <div>
            <h2>Book Service:{title}</h2>
   
      <form className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
   </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline">Order Confirm</button>
        </div>
      </form>
    </div>
 
    );
};

export default CheckOut;