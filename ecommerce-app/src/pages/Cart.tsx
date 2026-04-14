import axios from 'axios';
import { useState, useEffect } from 'react';

function Cart() {
    const userId = 1;
    const[cartInfo, setCartInfo] = useState<any>({ products: [] });

    useEffect(() => {
        fetchCartInfo();
    }, []);

    const fetchCartInfo = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
            console.log(data);
            setCartInfo(data[0]);
        } catch(error) {

        }
    };

    const updateQuantity = async (product, operation) => {
        try {
            const temp = cartInfo.products.map((_product: any) => {
                if (_product.id === product.id) {
                    return { ..._product, quantity: operation === 'decrement' ? product.quantity - 1 : product.quantity + 1 }
                } else {
                    return _product;
                }
            });
            setCartInfo({
                ...cartInfo,
                products: temp
            })
            const response = await axios.put(`http://localhost:3000/cart/${cartInfo.id}`, cartInfo);
        } catch(error) {

        }
    }
    return (
        <div className="container py-5">
        <h1 className="text-dark fw-bold mb-4">🛒 Cart</h1>

        {cartInfo?.products?.length > 0 ? (
            <div className="row">
            
            {/* Left Side - Products */}
            <div className="col-lg-8">
                {cartInfo.products.map((product: any) => {
                const lineTotal =
                    product.price * (product.quantity ?? 1);

                return (
                    <div
                    key={product.id}
                    className="card shadow-sm rounded-3 mb-3 border-0"
                    >
                    <div className="row g-0 align-items-center">

                        {/* Product Image */}
                        <div className="col-md-3 text-center p-3">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: "120px" }}
                        />
                        </div>

                        {/* Product Details */}
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="fw-bold">{product.name}</h5>
                            <p className="mb-1">
                            Price: ₹{product.price}
                            </p>
                            <p className="text-success mb-1">
                            Discount: {product.discount}%
                            </p>
                            <div className="d-flex align-items-center mt-2">
                                <button className="btn btn-outline-danger btn-sm"
                                   disabled={product.quantity===1}
                                   onClick={() => updateQuantity(product, 'decrement')}
                                >
                                    -
                                </button>
                                <span className="mb-0">
                                     Quantity: {product.quantity}
                                </span>
                                <button className="btn btn-outline-success btn-sm"
                                    onClick={() => updateQuantity(product, 'increment')}
                                >
                                     +
                                </button>

                            </div>
                        </div>
                        </div>

                        {/* Line Total */}
                        <div className="col-md-3 text-end pe-4">
                        <h5 className="fw-bold text-primary">
                            ₹{lineTotal}
                        </h5>
                        </div>

                    </div>
                    </div>
                );
                })}
            </div>

            {/* Right Side - Summary */}
            <div className="col-lg-4">
                <div className="card shadow rounded-3 p-4">
                <h4 className="fw-bold mb-3">Order Summary</h4>

                <div className="d-flex justify-content-between">
                    <span>Total Amount</span>
                    <strong className="text-primary">
                    ₹{cartInfo.totalAmount}
                    </strong>
                </div>

                <button className="btn btn-dark w-100 mt-4">
                    Proceed to Checkout
                </button>
                </div>
            </div>

            </div>
        ) : (
            <div className="text-center">
            <h4 className="text-muted">Your cart is empty</h4>
            </div>
        )}
        </div>

    )
}
export default Cart;