import React from 'react'
import './styles.css'

const ListItem = ({item:{image,price,title,location}}) => (
        <div className="list-item-wrap">
            <img src={image} alt='item' />
        <header>
            <h4>{title}</h4>
        </header>
        <footer>
            <p>
                <b>{location}</b>
            </p>
            <p>
                <b>Rs {price}</b>
            </p>
        </footer>
        </div>
);

export default ListItem