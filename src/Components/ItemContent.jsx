import { useState } from 'react'

const ItemContent = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                {/* { loop through the data here! } */}
                <div>item <span>picture </span><span> description</span><span> value</span></div>
            </div>
        </div>
    </div>
  )
}

export default ItemContent
