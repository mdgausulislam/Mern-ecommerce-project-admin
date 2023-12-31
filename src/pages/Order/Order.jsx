import React, { useState } from 'react';
import './Order.css'
import { useDispatch, useSelector } from 'react-redux';
import Main from '../../Layout/Main';
import Card from '../../Components/UI/Card/Card';
import { updateOrder } from '../../redux/actions/orderAction';


const Order = (props) => {
    const order = useSelector((state) => state.order);
    const [type, setType] = useState("");
    const dispatch = useDispatch();

    const onOrderUpdate = (orderId) => {
        const payload = {
            orderId,
            type,
        };
        dispatch(updateOrder(payload))
    };


    return (
        <div sidebar>
            {
                order.orders.map((orderItem, index) => <Card headerLeft={orderItem._id}>
                    <div key={index} style={{
                        boxSizing: "border-box",
                        padding: "100px",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div className='orderTrack'>
                            <div className='orderStatus'>
                                <div className='point'></div>
                                <div className='orderInfo'>
                                    <div className='status'>Ordered</div>
                                    <div className='date'>Fri,2020</div>
                                </div>
                            </div>
                            <div className='orderStatus'>
                                <div className='point'></div>
                                <div className='orderInfo'>
                                    <div className='status'>picked</div>
                                    <div className='date'>Fri,2020</div>
                                </div>
                            </div>
                            <div className='orderStatus'>
                                <div className='point'></div>
                                <div className='orderInfo'>
                                    <div className='status'>Shipped</div>
                                    <div className='date'>Fri,2020</div>
                                </div>
                            </div>
                            <div className='orderStatus'>
                                <div className='point'></div>
                                <div className='orderInfo'>
                                    <div className='status'>Delivered</div>
                                    <div className='date'>Fri,2020</div>
                                </div>
                            </div>

                        </div>
                        {/* select input to apply order action */}
                        <div
                            style={{
                                padding: "0 50px",
                                boxSizing: "border-box",
                            }}
                        >
                            <select onChange={(e) => setType(e.target.value)}>
                                <option value={""}>select status</option>
                                {orderItem.orderStatus.map((status) => {
                                    return (
                                        <>
                                            {!status.isCompleted ? (
                                                <option key={status.type} value={status.type}>
                                                    {status.type}
                                                </option>
                                            ) : null}
                                        </>
                                    );
                                })}
                            </select>
                        </div>
                        {/* button to confirm action */}

                        <div
                            style={{
                                padding: "0 50px",
                                boxSizing: "border-box",
                            }}
                        >
                            <button onClick={() => onOrderUpdate(orderItem._id)}>
                                confirm
                            </button>
                        </div>

                    </div>
                </Card>)
            }
        </div>
    );
};

export default Order;