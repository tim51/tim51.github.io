import React from 'react'
import PropTypes from 'prop-types'

const OrderedList = ({active, list, onClick}) => {
    return (
        <ol>
          {list.map((value,index) => <li key={index}>{value}</li>)}
        </ol>
    )
}

export default OrderedList