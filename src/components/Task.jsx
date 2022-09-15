import React from "react";
export default function Task(props){
  const [hovering, setHovering] = React.useState(false);
  function strikeTrough (e){
      if(!e.target.id) return
       e.target.classList.toggle("strike")

    }
  function btnRender1 (){
    setHovering(true)
  }
  function btnRender2 (){
    setHovering(false)
  }
    return(
            <div id={props.id} className= "taskContainer" onClick={strikeTrough} onMouseEnter={btnRender1} onMouseLeave={btnRender2}>
              <li>{props.text}</li>
              {hovering && <button className="checker"  onClick={props.handleClick}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>}
            </div>
    )
}