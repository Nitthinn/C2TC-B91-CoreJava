
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ListItem = () => {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newItem, setNewItem] = useState({ orderItemId: '', orderId: '', productId: '', quantity: '', unitPrice: '' });
//     const [editItem, setEditItem] = useState(null);

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const fetchItems = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/orderitems');
//             setItems(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError(err);
//             setLoading(false);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewItem({ ...newItem, [name]: value });
//     };

//     const handleAddItem = async () => {
//         try {
//             await axios.post('http://localhost:8080/orderitems', newItem);
//             setNewItem({ orderItemId: '', orderId: '', productId: '', quantity: '', unitPrice: '' });
//             fetchItems();
//         } catch (err) {
//             setError(err);
//         }
//     };

//     const handleDeleteItem = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/orderitems/${id}`);
//             fetchItems();
//         } catch (err) {
//             setError(err);
//         }
//     };

//     const handleEditItem = (item) => {
//         setEditItem(item);
//     };

//     const handleUpdateItem = async () => {
//         try {
//             await axios.put(`http://localhost:8080/orderitems/${editItem.orderItemId}`, editItem);
//             setEditItem(null);
//             fetchItems();
//         } catch (err) {
//             setError(err);
//         }
//     };

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error fetching data: {error.message}</p>;

//     return (
//         <div>
//             <h1>Order Items</h1>
//             <ul>
//                 {items.map(item => (
//                     <li key={item.orderItemId}>
//                         <h2>Order ID: {item.orderId}</h2>
//                         <p>Product ID: {item.productId}</p>
//                         <p>Quantity: {item.quantity}</p>
//                         <p>Unit Price: ${item.unitPrice}</p>
//                         <button onClick={() => handleDeleteItem(item.orderItemId)}>Delete</button>
//                         <button onClick={() => handleEditItem(item)}>Edit</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Add New Item</h2>
//             <input type="number" name="orderItemId" placeholder="Order Item ID" value={newItem.orderItemId} onChange={handleInputChange} />
//             <input type="number" name="orderId" placeholder="Order ID" value={newItem.orderId} onChange={handleInputChange} />
//             <input type="number" name="productId" placeholder="Product ID" value={newItem.productId} onChange={handleInputChange} />
//             <input type="number" name="quantity" placeholder="Quantity" value={newItem.quantity} onChange={handleInputChange} />
//             <input type="number" name="unitPrice" placeholder="Unit Price" value={newItem.unitPrice} onChange={handleInputChange} />
//             <button onClick={handleAddItem}>Add Item</button>

//             {editItem && (
//                 <div>
//                     <h2>Edit Item</h2>
//                     <input type="number" name="orderItemId" placeholder="Order Item ID" value={editItem.orderItemId} onChange={(e) => setEditItem({ ...editItem, orderItemId: e.target.value })} />
//                     <input type="number" name="orderId" placeholder="Order ID" value={editItem.orderId} onChange={(e) => setEditItem({ ...editItem, orderId: e.target.value })} />
//                     <input type="number" name="productId" placeholder="Product ID" value={editItem.productId} onChange={(e) => setEditItem({ ...editItem, productId: e.target.value })} />
//                     <input type="number" name="quantity" placeholder="Quantity" value={editItem.quantity} onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })} />
//                     <input type="number" name="unitPrice" placeholder="Unit Price" value={editItem.unitPrice} onChange={(e) => setEditItem({ ...editItem, unitPrice: e.target.value })} />
//                     <button onClick={handleUpdateItem}>Update Item</button>
//                     <button onClick={() => setEditItem(null)}>Cancel</button>
//                 </div>
//             )}

//             <Link to="/">Back to Home</Link>
//         </div>
//     );
// };

// export default ListItem;






// src/ListItem.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListItem.css'; // Import CSS for ListItem

const ListItem = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newItem, setNewItem] = useState({ orderItemId: '', orderId: '', productId: '', quantity: '', unitPrice: '' });
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8080/orderitems');
            setItems(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAddItem = async () => {
        if (Object.values(newItem).some(value => value === '')) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            await axios.post('http://localhost:8080/orderitems', newItem);
            setNewItem({ orderItemId: '', orderId: '', productId: '', quantity: '', unitPrice: '' });
            fetchItems();
        } catch (err) {
            setError(err);
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/orderitems/${id}`);
            fetchItems();
        } catch (err) {
            setError(err);
        }
    };

    const handleEditItem = (item) => {
        setEditItem(item);
    };

    const handleUpdateItem = async () => {
        try {
            await axios.put(`http://localhost:8080/orderitems/${editItem.orderItemId}`, editItem);
            setEditItem(null);
            fetchItems();
        } catch (err) {
            setError(err);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="list-item">
            <h1>Order Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.orderItemId} className="item-card">
                        <h2>Order ID: {item.orderId}</h2>
                        <p>Product ID: {item.productId}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Unit Price: ${item.unitPrice}</p>
                        <div className="item-actions">
                            <button onClick={() => handleDeleteItem(item.orderItemId)}>Delete</button>
                            <button onClick={() => handleEditItem(item)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="form-container">
                <h2>Add New Item</h2>
                <input type="number" name="orderItemId" placeholder="Order Item ID" value={newItem.orderItemId} onChange={handleInputChange} />
                <input type="number" name="orderId" placeholder="Order ID" value={newItem.orderId} onChange={handleInputChange} />
                <input type="number" name="productId" placeholder="Product ID" value={newItem.productId} onChange={handleInputChange} />
                <input type="number" name="quantity" placeholder="Quantity" value={newItem.quantity} onChange={handleInputChange} />
                <input type="number" name="unitPrice" placeholder="Unit Price" value={newItem.unitPrice} onChange={handleInputChange} />
                <button onClick={handleAddItem}>Add Item</button>
            </div>

            {editItem && (
                <div className="form-container">
                    <h2>Edit Item</h2>
                    <input type="number" name="orderItemId" placeholder="Order Item ID" value={editItem.orderItemId} onChange={(e) => setEditItem({ ...editItem, orderItemId: e.target.value })} />
                    <input type="number" name="orderId" placeholder="Order ID" value={editItem.orderId} onChange={(e) => setEditItem({ ...editItem, orderId: e.target.value })} />
                    <input type="number" name="productId" placeholder="Product ID" value={editItem.productId} onChange={(e) => setEditItem({ ...editItem, productId: e.target.value })} />
                    <input type="number" name="quantity" placeholder="Quantity" value={editItem.quantity} onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })} />
                    <input type="number" name="unitPrice" placeholder="Unit Price" value={editItem.unitPrice} onChange={(e) => setEditItem({ ...editItem, unitPrice: e.target.value })} />
                    <button onClick={handleUpdateItem}>Update Item</button>
                    <button onClick={() => setEditItem(null)}>Cancel</button>
                </div>
            )}

            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default ListItem;
