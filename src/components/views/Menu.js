import React from 'react'

import Item from '../Item'

const DUMMY_DATA = [{
  id: 1,
  name: 'Sourdough',
  weight: '1lb',
  image: '',
  price: '$5'
},{
  id: 2,
  name: 'Whole Wheat',
  weight: '1.5lb',
  image: '',
  price: '$4'
},{
  id: 3,
  name: 'Whole Grain',
  weight: '0.5lb',
  image: '',
  price: '$5'
},{
  id: 1,
  name: 'Soda Bread',
  weight: '1lb',
  image: '',
  price: '$2'
},
]

export default function Menu(props) {
  return (
    <div style={{marginTop: '10vh'}}>
      <Item />
      <Item />
    </div>
  )
}
