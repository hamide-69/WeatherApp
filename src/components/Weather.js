import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faList,faCloud } from '@fortawesome/free-solid-svg-icons'

const Weather = props => (
<div >
{props.city && props.country && <p> city : {props.city} , Country : {props.country}</p>}
{props.temperature && <p>Temperature : {props.temperature} <b>C </b> </p>} 
{props.humidity && <p>Humidity : {props.humidity}  <b>% </b> </p> }
{props.description && <p>Description : {props.description} <FontAwesomeIcon icon={faCloud} /> </p>}
{props.error &&  <p>Error : {props.error}</p>}



</div>

)


export default Weather ;