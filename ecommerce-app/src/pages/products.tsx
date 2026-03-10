import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    specifications: string[];
    price: number;
    discount: number;
    imageUrl: string;
    inStock: boolean;
}

function Products(){
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [sortOrder, setSortOrder] = useState<string>('asc');

    useEffect(() => {
        fetchAllProducts();
    }, [sortOrder]);

    const fetchAllProducts = async() => {
        try {
            const response = await fetch(`http://localhost:3000/products?_sort=price&_order=${sortOrder}`,{
                method: 'GET'
            });

            const parsedResponse = await response.json();
            setProducts(parsedResponse);
            setFilteredProducts(parsedResponse)
        } catch(error){

        }
    };

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(value);
    };

    const calculateDiscountedPrice = (price: number, discount: number): string => {
        const discountedPrice = price - (price * discount / 100);
        return formatCurrency(discountedPrice);
    };

    const onSearchQuery = (enteredValue: string) => {
        const temp = products.filter(product => product.name.toLocaleLowerCase().includes(enteredValue.toLocaleLowerCase()));
        setFilteredProducts(temp);
        console.log(filteredProducts);
    }

    return(
        <div id="products" className="container py-5">
            <h2 className="text-dark fw-bold mb-4">Products</h2>
            <div className="row">
                <div className='col-sm-9'>
                    <div className="my-4">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search here...." onKeyUp={(event: any) => onSearchQuery(event.target.value)}/>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <label>Sort by price: </label>
                    <select className="form-select" onChange={(event) => setSortOrder(event.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>

                </div>
            </div>
            {filteredProducts.map((product) => (
                <div key={product.id} className="row border-bottom my-4 py-4 align-items-center">
                    <div className="col-sm-3 d-flex justify-content-center">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="img-fluid rounded shadow-sm"
                            style={{ maxWidth: 180, objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Link to={`/product-details/${product.id}?name=${product.name}&price=${product.price}`}>
                            <h3 className="h5 mb-2">
                            {product.name}
                            <span className="badge bg-success ms-2">-{product.discount}%</span>
                            </h3>
                        </Link>
                        
                        <ul className="small mb-0">
                            {product.specifications.map((specification, sidx) => (
                                <li key={sidx}>{specification}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-sm-3 text-end">
                        <div className="mb-2">
                            <div className="h5 mb-1">{calculateDiscountedPrice(product.price, product.discount)}</div>
                            <div className="text-muted small">
                                <s>{formatCurrency(product.price)}</s>
                                <span className="text-success ms-2">
                                    Save {formatCurrency(product.price - (product.price * product.discount / 100))}
                                </span>
                            </div>
                        </div>
                        {product.inStock ? (
                            <button className="btn btn-primary">Add to cart</button>
                        ) : (
                            <>
                                <button className="btn btn-secondary" disabled>Out of Stock</button>
                                <div className="mt-2"><span className="badge bg-danger">Unavailable</span></div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;