import React from 'react';
import PropTypes from 'prop-types';

class DeletableList extends React.Component {

    deleteItemButton = function(index) {
        return <button className={this.props.deleteItemButtonClassName} type="button" onClick={this.props.onClick}> {this.props.deleteItemButtonText} </button>
    }

    render() {
        return (
            <ul className={this.props.listClassName}>
                {this.props.list.map((item,index) => <li className={this.props.listClassName+"-item"} key={index}> {item}{this.deleteItemButton()} </li> )}
            </ul>
        )
    }
}

DeletableList.propTypes = {
    deleteItemButtonClassName: PropTypes.string,
    deleteItemButtonText: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.any),
    listClassName: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

DeletableList.defaultProps = {
    deleteItemButtonClassName: "delete-item-button",
    deleteItemButtonText: "x",
    list: [],
    listClassName: "deletable-list",
}

export default DeletableList;