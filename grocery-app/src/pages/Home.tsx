function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="container py-5 text-center">
        <h1 className="fw-bold mb-3">
          Groceries delivered in minutes 🚀
        </h1>
        <p className="text-muted mb-4">
          Fresh vegetables, fruits, snacks & more at your doorstep
        </p>

        <button className="btn btn-primary px-4">
          Start Shopping
        </button>
      </div>

      {/* CATEGORIES */}
      <div className="container py-4">
        <div className="row g-3">

          {["Vegetables", "Fruits", "Dairy", "Snacks"].map((item) => (
            <div className="col-6 col-md-3" key={item}>
              <div className="border rounded p-3 text-center fw-medium">
                {item}
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Home;
