import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faList,faAlignLeft } from '@fortawesome/free-solid-svg-icons'

class Title extends Component {
    render(){
        return(
            <div className="title">  <FontAwesomeIcon icon={faAlignLeft} />  Weather Title</div>
        )
    }
}

export default Title ;