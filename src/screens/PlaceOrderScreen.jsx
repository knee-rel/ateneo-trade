import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import LoadingSpinner from "../components/LoadingSpinner";
import { useCreateOrderMutation } from "../slices/orderApiSlice";
import { clearCartItems } from "../slices/cartSlice";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();

      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-8/12">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-2xl font-semibold">Shipping</h2>
            <p className="text-sm">
              <strong>Address:</strong>{" "}
              {`${cart.shippingAddress.address}, ${cart.shippingAddress.city} ${cart.shippingAddress.postalCode}, ${cart.shippingAddress.country}`}
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-2xl font-semibold">Payment Method</h2>
            <p className="text-sm">
              <strong>Method: </strong>
              {cart.paymentMethod}
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <div className="space-y-4">
                {cart.cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center border-b border-gray-200 pb-2"
                  >
                    <div className="flex-shrink-0 w-20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <Link
                        to={`/product/${item.product}`}
                        className="text-blue-600 font-semibold"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm">{`${item.qty} x $${
                        item.price
                      } = $${item.qty * item.price}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-4/12 ml-8">
          <div className="bg-white border rounded-md p-4">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="mb-2 flex justify-between">
              <span>Items</span>
              <span>${cart.itemsPrice}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Shipping</span>
              <span>${cart.shippingPrice}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Tax</span>
              <span>${cart.taxPrice}</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Total</span>
              <span>${cart.totalPrice}</span>
            </div>
            <div className="mb-2">
              {error && <Message variant="danger">{error}</Message>}
            </div>
            <div>
              <Button
                type="button"
                className="btn-block"
                disabled={cart.cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </Button>
              {isLoading && <LoadingSpinner />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
