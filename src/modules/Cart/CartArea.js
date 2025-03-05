import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Courses from '@/data/courses.json';
import {
  productRemoveData,
  updateProductQuantity,
} from '@/redux/product/actionCreator';
import { toast } from 'react-toastify';

const ProductRow = ({ id, slug, title, price, image, quantity }) => {
  const dispatch = useDispatch();

  // Dispatch the action to remove product from cart
  const handleRemoveProduct = () => {
    dispatch(productRemoveData(id));
    toast.info(`${title} removed from Cart!`, {
      position: 'top-center',
    });
  };

  // Dispatch the action to increase the product quantity
  const handleIncrement = () => {
    dispatch(updateProductQuantity(id, quantity + 1));
  };

  // Dispatch the action to decrease the product quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateProductQuantity(id, quantity - 1));
    }
  };

  const subtotal = price * quantity; // Calculate subtotal of each product based on quantity and price

  return (
    <tr key={id}>
      <td className="product-thumbnail">
        <Link href={`/course/${slug ? slug : 'details'}`}>
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </td>
      <td className="product-name">
        <Link href={`/course/${slug ? slug : 'details'}`}>{title}</Link>
      </td>
      <td className="product-price">
        <span className="amount">${price}</span>
      </td>
      <td className="product-quantity">
        <span className="cart-minus" onClick={handleDecrement}>
          -
        </span>
        <input
          className="cart-input"
          type="number"
          min="1"
          value={quantity}
          readOnly
        />
        <span className="cart-plus" onClick={handleIncrement}>
          +
        </span>
      </td>
      <td className="product-subtotal">
        <span className="amount">${subtotal.toFixed(2)}</span>
      </td>
      <td className="product-remove">
        <button onClick={handleRemoveProduct}>
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

const CartArea = () => {
  const [isClient, setIsClient] = useState(false); // State to track if component is mounted on the client side
  const { addedProducts } = useSelector((state) => state.product); // Selector to get product from cart items

  const selectedCourses = Courses.filter((course) =>
    addedProducts.some((product) => product.id === course.id)
  );

  const addedToCart = useSelector((state) => state.product);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    selectedCourses.forEach((course) => {
      const quantity = addedToCart.addedProducts.find(
        (product) => product.id === course.id
      ).quantity;
      total += course.price * quantity;
    });
    return total; // Add shipping cost to total
  };

  // Set total price when the component mounts or whenever selectedCourses, addedToCart, or shippingCost changes
  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
  }, [selectedCourses, addedToCart]);

  // Set state to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <>
      {selectedCourses.length === 0 ? (
        <div className="it-error-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-12">
                <div className="it-error-content">
                  <h5 className="it-error-title">Your Cart is Empty</h5>
                  <p className="mb-35">
                    But it doesn't have to stay that way. <br /> Browse our
                    courses and find something you love!
                  </p>
                  <Link href="/course" className="it-btn">
                    <span>
                      Find Course
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1.24023L16 7.24023L11 13.2402"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 7.24023H16"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="cart-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCourses.map((course) => {
                        const productInCart = addedProducts.find(
                          (product) => product.id === course.id
                        );
                        return (
                          <ProductRow
                            key={course.id}
                            {...course}
                            quantity={productInCart.quantity}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5 ">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>${totalPrice.toFixed(2)}</span>
                        </li>
                        <li>
                          Total <span>${totalPrice.toFixed(2)}</span>
                        </li>
                      </ul>
                      <Link className="it-btn" href="/checkout">
                        <span>Proceed to checkout</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartArea;
