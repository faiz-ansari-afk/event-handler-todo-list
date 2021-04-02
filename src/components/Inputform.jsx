import React from "react";

function Inputform(props) {
	return (
		<div className='form'>
			<input
				type='text'
				name='item'
				value={props.value}
				onChange={props.onChange}
			/>
			<button onClick={props.onClick}>
				<span>Add</span>
			</button>
		</div>
	);
}
export default Inputform;