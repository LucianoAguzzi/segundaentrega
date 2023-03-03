import ItemDetail from '../ItemDetail/ItemDetail';
import React,{useState, useEffect} from 'react'

const lista = 
  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  };

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() =>{
    const getData = new Promise(resolve=>{
      setTimeout(()=>{
        resolve(lista);
      }, 3000);
    });
    getData.then(res=> setData(res));
    }, [])
    return (
      <ItemDetail data={data}/>
    );
  }

export default ItemDetailContainer