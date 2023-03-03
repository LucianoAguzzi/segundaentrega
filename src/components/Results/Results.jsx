import React from 'react'

const Results = (props) => {
  return (
    <div>
    {
      props.results.map((result)=>
      <div>
        <img src={result.thumbnail} alt="" />
        <h2>{result.title}</h2>
        <p>Precio: ${result.price}</p>
        <p>Nro de ventas: ${result.sold_quantity}</p>
      </div>
      )}
    </div>
  )
}

export default Results