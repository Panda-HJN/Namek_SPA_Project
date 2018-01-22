import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './style.scss'
import './css.css'
class Root extends Component{
    constructor() {
        super()
        this.state = {
            isSucceed: false,
            username:'',
        }
    }
    render(){
        return(<div>111</div>)
    }
}
ReactDom.render(<Root/>,
    document.getElementById('rootWrap')
)