import React from 'react';
import ProductRow from '../components/ProductRow';
import {FaShoppingCart} from 'react-icons/fa';

function OrderPage({products}) {
    return (
        <>
            <h2><FaShoppingCart/>ORDER</h2>
            <article>
                <p>Please place the order using the following form. Select the product you want to order and specify the quantity (maximum quantity is 10). 
                </p>
                <table>
                    <caption>Products in my store: </caption>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Company</th>
                            <th>Price/Unit</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => <ProductRow product={product} key={index} />)}
                    </tbody>
                </table>
            </article>
            </>
        );
        }

export default OrderPage;