import React from "react";
function List(props) {
    // we have to strike through text when clicked
	// const [isChecked, setIsChecked] = React.useState(false);
	// function handleClick(preValue) {
	// 	!preValue ? setIsChecked(true) : setIsChecked(false);
	// }
    // delete list item when clicked
  
	return (
		<li
			onClick={()=>props.onChecked(props.id)}
			// style={isChecked && { textDecoration: "line-through" }}
		>
			{props.text}
		</li>
	);
}
export default List;
