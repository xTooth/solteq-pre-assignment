import React from 'react'

const ListItem = (props) => {
    const item = props.item
    const location = "https://www.google.com/maps/search/?api=1&query=" + item.latitude + "," + item.longitude
    return (
        <li>
            <h3>{item.name}</h3>
            <p>{item.name} is a {item.brewery_type}-brewery</p>
            <p>Address: {item.street}, {item.city}, {item.state}, {item.country}</p>
            <p>Postal code: {item.postal_code}</p>
            <a href={location}>Location on Google maps</a>
            <p>Phone number: {item.phone}</p>
            <a href={item.website_url}> {item.website_url}</a>
        </li>
    )
}

export default ListItem