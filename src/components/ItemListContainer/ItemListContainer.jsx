import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const marketRef = collection(db, 'item');
    if (categoryId) {
      const productsfiltered = query(marketRef, where("category", "==", categoryId))
      getDocs(productsfiltered)
        .then(res => {
          if (res.docs.length) {
            setItems(res.docs.map(item => ({ id: item.id, ...item.data() })))
            setLoading(false)
          }
        })
    }
    else {
      getDocs(marketRef)
        .then(res => {
          if (res.docs.length) {
            setItems(res.docs.map(item => ({ id: item.id, ...item.data() })))
          }
          setLoading(false)
        })
    }

  }, [categoryId]);




  return (
    <main>
      <div className='item-list-container'>
        <h1 className="titlehome">↓↓ Best offers here ↓↓ </h1>
        <div className='card-container'>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            items &&
            items.map((item) => {
              return (
                <div className='card' key={item.id}>
                  <img src={item.imageid} alt={`${item.title}`} />
                  <button className='button-detail' id={`button-${item.id}`}>
                    <Link to={`/item/${item.id}`} className='detail'>
                      Go to detail
                    </Link>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default ItemListContainer;




