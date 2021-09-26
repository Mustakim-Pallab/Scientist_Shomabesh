import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scientist/Scientist';
import data from '../../fakeData/fakeData.json'

const Body = () => {

    const [scientists, setScientists] = useState([]);
    useEffect(() => {
        setScientists(data);
    }, [])

    const [cart, setCart] = useState([]);


    const handleHireBtn = (scientist) => {
        if (cart.indexOf(scientist) === -1) {
            const newCart = [...cart, scientist];
            setCart(newCart);
        }
        else
        {
            alert("Already Added!");
        }

    }

    return (
        <main className="container main-container my-5">
            <div className="row">
                <div className="scientist-info-container col-lg-8 row m-0">
                    {
                        scientists.map(scientist => <Scientist scientist={scientist} handleHireBtn={handleHireBtn} key={scientist.name}></Scientist>)
                    }
                </div>
                <div className="cart-container col-lg-4">
                    <Cart cart={cart} key={cart.name}></Cart>
                </div>
            </div>
        </main>
    );
};

export default Body;