import React from 'react'
import PropTypes from 'prop-types'

const OrderedList = ({activeItem, list, onClick}) => {
    return (
        <ol>
          {list.map((value,index) => <li key={index}>
                                       <button onClick={onClick} 
                                               style={(activeItem == value)?{backgroundColor: 'red'}:{}} 
                                               type="button" id={value}>
                                         {"question id: "+value}
                                       </button>
                                      </li>
            )}
        </ol>
    )
}

export default OrderedList