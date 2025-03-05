import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Courses from '@/data/courses.json';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Link from 'next/link';

const items = [
  {
    header: 'Direct Bank Transfer',
    content:
      'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.',
  },
  {
    header: 'Cheque Payment',
    content:
      'Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
  },
  {
    header: 'PayPal',
    content:
      'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
  },
];

export default function CheckoutArea() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [priceWithShipping, setPriceWithShipping] = useState(
    totalPrice + shippingCost
  );
  const [selectedShipping, setSelectedShipping] = useState('0');

  const addedToCart = useSelector((state) => state.product);
  const selectedCourses = Courses.filter((course) =>
    addedToCart.addedProducts.some((product) => product.id === course.id)
  );

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    selectedCourses.forEach((course) => {
      const quantity = addedToCart.addedProducts.find(
        (product) => product.id === course.id
      ).quantity;
      total += course.price * quantity;
    });
    return total;
  };

  // Set total price when the component mounts or whenever selectedCourses, addedToCart, or shippingCost changes
  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
    setPriceWithShipping(total + parseInt(shippingCost));
  }, [selectedCourses, addedToCart, shippingCost]);

  // Handle radio button change
  const handleShippingChange = (e) => {
    setSelectedShipping(e.target.value);
    setShippingCost(e.target.value);
  };

  const [isClient, setIsClient] = useState(false); // State to track if component is mounted on the client side
  // Set state to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <section className="checkout-area pb-70">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="country-select">
                      <label>
                        Country <span className="required">*</span>
                      </label>
                      <select>
                        <option value="volvo">bangladesh</option>
                        <option value="saab">Algeria</option>
                        <option value="mercedes">Afghanistan</option>
                        <option value="audi">Ghana</option>
                        <option value="audi2">Albania</option>
                        <option value="audi3">Bahrain</option>
                        <option value="audi4">Colombia</option>
                        <option value="audi5">Dominican Republic</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        First Name <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Last Name <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Company Name</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Address <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Street address" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Town / City <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Town / City" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        State / County <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Postcode / Zip <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Postcode / Zip" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <input type="email" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Postcode / Zip" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list create-acc">
                      <input id="cbox" type="checkbox" />
                      <label>Create an account?</label>
                    </div>
                    <div
                      id="cbox_info"
                      className="checkout-form-list create-account"
                    >
                      <p>
                        Create an account by entering the information below. If
                        you are a returning customer please login at the top of
                        the page.
                      </p>
                      <label>
                        Account password <span className="required">*</span>
                      </label>
                      <input type="password" placeholder="password" />
                    </div>
                  </div>
                </div>
                <div className="different-address">
                  <div className="ship-different-title">
                    <h3>
                      <label>Ship to a different address?</label>
                      <input id="ship-box" type="checkbox" />
                    </h3>
                  </div>
                  <div id="ship-box-info">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <select>
                            <option value="volvo">bangladesh</option>
                            <option value="saab">Algeria</option>
                            <option value="mercedes">Afghanistan</option>
                            <option value="audi">Ghana</option>
                            <option value="audi2">Albania</option>
                            <option value="audi3">Bahrain</option>
                            <option value="audi4">Colombia</option>
                            <option value="audi5">Dominican Republic</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            type="text"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Town / City" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input type="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>Order Notes</label>
                      <textarea
                        id="checkout-mess"
                        cols="30"
                        rows="10"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="your-order mb-30 ">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name">Product</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCourses.map((course) => {
                        const quantity = addedToCart.addedProducts.find(
                          (product) => product.id === course.id
                        ).quantity;

                        return (
                          <tr key={course.id} className="cart_item">
                            <td className="product-name">
                              {course.title}{' '}
                              <strong className="product-quantity">
                                {' '}
                                × {quantity}
                              </strong>
                            </td>
                            <td className="product-total">
                              <span className="amount">
                                ${course.price * quantity}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount">${totalPrice}</span>
                        </td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          <ul>
                            <li>
                              <input
                                type="radio"
                                name="shipping"
                                value="7"
                                checked={selectedShipping === '7'}
                                onChange={handleShippingChange}
                              />
                              <label>
                                Flat Rate: <span className="amount">$7.00</span>
                              </label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="shipping"
                                value="0"
                                checked={selectedShipping === '0'}
                                onChange={handleShippingChange}
                              />
                              <label>Free Shipping:</label>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td>
                          <strong>
                            <span className="amount">${priceWithShipping}</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="payment-method">
                  <Accordion className="accordion">
                    {items
                      .map(({ header, content }, i) => (
                        <AccordionItem
                          header={header}
                          key={i}
                          initialEntered
                          className="accordion-item"
                        >
                          {content}
                        </AccordionItem>
                      ))
                      .slice(0, 1)}
                    {items
                      .map(({ header, content }, i) => (
                        <AccordionItem
                          header={header}
                          key={i}
                          className="accordion-item"
                        >
                          {content}
                        </AccordionItem>
                      ))
                      .slice(1, 3)}
                  </Accordion>
                  <div className="order-button-payment mt-20">
                    <Link href="#" className="it-btn">
                      Place order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
