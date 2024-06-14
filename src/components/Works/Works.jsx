import axios from "axios";

const Works = () => {
  const handleCreatePayment = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/create-payment", {
        amount: e.target.amount.value,
        currency: "BDT",
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      <div className="hero rounded-xl">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mb-5 font-bold flex justify-center">
              Invest in my projects
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreatePayment} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Investment Amount</span>
                </label>
                <input
                  type="number"
                  placeholder="Investment Amount"
                  name="amount"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Invest" className="btn font-bold" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
