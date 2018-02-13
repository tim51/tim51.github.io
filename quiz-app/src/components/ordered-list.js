import React from 'react'
import PropTypes from 'prop-types'

OrderedList.propTypes = {
    activeItem: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.any).isRequired,
    onClick: PropTypes.func.isRequired
}

function OrderedList({activeItem, list, onClick}) {
    
    return (
        <ol>
          {list.map((value,index) => <li key={index}>
                                       <button onClick={onClick} style={(activeItem == value)?{backgroundColor: 'red'}:{}} type="button" id={value}>
                                         {"question id: "+value}
                                       </button>
                                      </li>
            )}
        </ol>
    )
}

export default OrderedList