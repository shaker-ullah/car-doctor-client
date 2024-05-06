import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {
    const services = useLoaderData()
    // console.log(services)
    const { title, price } = services
    const {user} = useContext(AuthContext)
    const handleBookService = e => {
        e.preventDefault()
        const name = e.target.name.value
        const date = e.target.date.value
        const email = e.target.email.value
        const price = e.target.price.value
        const info = {name, date, email, price}
        console.log(info)
}

    return (
        <div>
        <h2 className="text-center text-3xl">Book page Service:{title}</h2>

  <form onSubmit={handleBookService} className="card-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />
    </div>
      <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
    </div>
      <div className="form-control">
      <label className="label">
        <span className="label-text">email</span>
      </label>
      <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Due amount</span>
      </label>
      <input type="text" name="price" defaultValue={'$'+ price} className="input input-bordered" required />
     
    </div>
   
</div>
    <div className="form-control mt-6">
      <button className="btn btn-outline">Order Confirm</button>
    </div>
  </form>
</div>
    );
};

export default BookService;