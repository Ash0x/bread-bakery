import React from 'react'

import Item from '../Item'

const OFFERINGS = [{
  id: 1,
  name: 'Sourdough',
  weight: '1lb',
  image: '/assets/Sourdough.jpg',
  price: '$5'
},{
  id: 2,
  name: 'Whole Wheat',
  weight: '1.5lb',
  image: '/assets/WholeWheat.jpg',
  price: '$4'
},{
  id: 3,
  name: 'Whole Grain',
  weight: '0.5lb',
  image: '/assets/WholeGrain.jpg',
  price: '$5'
},{
  id: 4,
  name: 'Soda Bread',
  weight: '1lb',
  image: '/assets/SodaBread.jpg',
  price: '$2'
},
]

export default function Menu(props) {
  return (
    <div style={{marginTop: '10vh'}}>
      <Item items={OFFERINGS}/>
    </div>
  )
}
