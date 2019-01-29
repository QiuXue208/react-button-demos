import  React from 'react'
import './Button.css'
export default class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            active:false,
            deltaX:0,
            deltaY:0
        }
        this.myRef = React.createRef();
    }
    x(event){
        this.setState({
            active:true,
            deltaX:event.clientX - this.myRef.current.getBoundingClientRect().x - 8,
            deltaY:event.clientY - this.myRef.current.getBoundingClientRect().y - 8           
        })
        setTimeout(()=>{
            this.setState({
                active:false
            })
        },700)
    }
    render(){
        return (
            <div>
                <button ref={this.myRef} onClick={this.x.bind(this)}>
                    <span className="value">按钮</span>
                    {this.state.active === true ? <span className="shadow"
                          style={{top:this.state.deltaY,left:this.state.deltaX}}>
                    </span>:''}

                </button>
            </div>
        )
    }
}