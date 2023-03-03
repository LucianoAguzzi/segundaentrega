import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const lista=[
     
{id: 'MLA1322677040', title: 'Reloj Pulsera Skmei 1251 De Cuerpo Color Negro, Di… Blanco Y Negro, Bisel Color Negro, Luz Verde Y H', condition: 'new', thumbnail_id: '680514-MLA47631389644_092021', catalog_product_id: 'MLA17403339'},

 
{id: 'MLA1182473246', title: 'Smartwatch Microwear W26 1.75  Caja De  Aleación De Zinc  Oro Rosa, Malla  Rosa', condition: 'new', thumbnail_id: '815732-MLA44916250737_022021', catalog_product_id: 'MLA16140522'},

 
{id: 'MLA1240842973', title: 'Reloj Pulsera Skmei 1389 De Cuerpo Color Plateado,…olor Blanco Y Gris, Dial Negro, Blanco Y Gris, Su', condition: 'new', thumbnail_id: '646093-MLA47574132101_092021', catalog_product_id: 'MLA17434522'},


{id: 'MLA1318105189', title: 'Reloj Skmei Táctico Militar 1346 ', condition: 'new', thumbnail_id: '751357-MLA31037529763_062019', catalog_product_id: 'MLA21264600'},


{id: 'MLA1307619881', title: 'Reloj Pulsera Skmei 1155 De Cuerpo Color Negro, An… Y Negro, Dial Blanco, Subesferas Color Negro, Mi', condition: 'new', thumbnail_id: '869115-MLA47617370347_092021', catalog_product_id: 'MLA18312901'},

{id: 'MLA1112607904', title: 'Smartwatch Dt2 Mujer Elegante Llamadas Control Menstrual ', condition: 'new', thumbnail_id: '873307-MLA48240693655_112021', catalog_product_id: 'MLA19132191'},

]
export const ItemListContainer = () => {
    const {category_id} = useParams ("");
    const [data, setData] = useState([])}
    useEffect(() => {
      fetch(` https://api.mercadolibre.com/categories/${category_id}`)
        .then((results) => results.json())
        .then(
          (data) => {
            setData(data.results);
  
            if (categoryId) {
              getData.then(res => setData(res.filter(products => products.category === categoryId)));
            } else {
              getData.then(res => setData(res));
            }
          },
          [categoryId]
        );
    });
  return (
    <div>
          <h1>Welcome to My Store!</h1>
    <p>Check out our latest products:</p>
      <h2>Item Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <Item data={data}/>
    </div>
  );


