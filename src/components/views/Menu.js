import React from 'react'

import Item from '../Item'

const OFFERINGS = require('../../offerings.json')

export default function Menu(props) {
  return (
    <div style={{ marginTop: '10vh' }}>
      <Item items={OFFERINGS} />
    </div>
  )
}