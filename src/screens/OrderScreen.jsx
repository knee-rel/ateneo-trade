import { Link, useParams } from "react-router-dom";
import Message from "../components/Message";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetOrderDetailsQuery } from "../slices/orderApiSlice";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const { data: order, isLoading, error } = useGetOrderDetailsQuery(orderId);

  return isLoading ? (
    <LoadingSpinner />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1 className="text-2xl font-semibold mb-4">Order {order._id}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-8/12 md:pr-4 mb-8 md:mb-0">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Shipping</h2>
            <p className="mb-2">
              <strong>Name: </strong> {order.user.name}
            </p>
            <p className="mb-2">
              <strong>Email: </strong>{" "}
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {order.shippingAddress.address},{" "}
              {order.shippingAddress.city} {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <Message variant="success">
                Delivered on {order.deliveredAt}
              </Message>
            ) : (
              <Message variant="danger">Not Delivered</Message>
            )}
          </div>

          <div className="bg-white p-4 mt-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <p className="mb-2">
              <strong>Method: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <Message variant="success">Paid on {order.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </div>

          <div className="bg-white p-4 mt-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Order Items</h2>
            {order.orderItems.length === 0 ? (
              <Message>Order is empty</Message>
            ) : (
              <div className="space-y-2">
                {order.orderItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-16 h-16">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.product}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:w-4/12">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>${order.itemsPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${order.shippingPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>${order.taxPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total</span>
              <span>${order.totalPrice}</span>
            </div>
            {/* PAY ORDER PLACEHOLDER */}
            {/* {MARK AS DELIVERED PLACEHOLDER} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
