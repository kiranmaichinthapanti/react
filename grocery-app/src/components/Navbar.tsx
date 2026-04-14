function Navbar(){

    return(
       <nav className="navbar bg-white border-bottom px-4">
            <div className="container-fluid d-flex align-items-center">
                <div className="d-flex align-items-center gap-3">
                    <h1 className="fw-bold m-0" style={{ color: '#7c2ae8', fontSize:"28px"}}>zepto</h1>
                    <div className="location">
                        <span>Select Location</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>

                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for vegetables"/>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                        <i className="fa-regular fa-user fs-5"></i>
                        <span>Login</span>
                     </div>

                    <div className="d-flex align-items-center gap-2">
                        <i className="fa-solid fa-cart-shopping fs-5"></i>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
       </nav>
    );

}
export default Navbar;