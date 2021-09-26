import React from 'react';
import './Cart.css'

const Cart = (props) => {

    let total = 0;
    props.cart.map(scientist => {
        total = total + scientist.honourium;
    })

    return (
        <section className='team-summary my-5'>
            <h3 className='team-summary-title'>Team Summary</h3>
            <hr />

            <p className='total-scientist'>Total scientists: {props.cart.length}</p>

            <table className="table table-borderless mt-3 mb-5">
                <thead className="table-light fw-bold selected-scientist">
                    <tr>
                        <th scope="col" className='text-left'>scientist Name</th>
                        <th scope="col" className="text-right">honourium</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map(scientist =>
                            <tr>
                                <td className='text-left selected-scientist'>{scientist.name}</td>
                                <td className="text-right selected-scientist">$ {scientist.honourium}M / Month</td>
                            </tr>)
                    }
                </tbody>
                <tfoot>
                    <tr className="total">
                        <td><b>Total Budget</b></td>
                        <td className="text-right"> <b>$ <span className='total-amount'>{total}M</span> / Month</b> </td>
                    </tr>
                </tfoot>
            </table>

        </section>
    );
};

export default Cart;