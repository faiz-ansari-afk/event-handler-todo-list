import React, { useState } from "react";
import "./App.css";

function App() {
	// const [fname, setFName] = useState("");
	// const [lname, setLName] = useState("");
	// const [fnameUI, setHeadingText] = useState("");
	// const [lnameUI, setLNameText] = useState("");
	const [contact, setContact] = useState({
		fname: "",
		lname: "",
		email: "",
	});
	// below im trying to show hooks on click of submit button ,but gaand phat gayi nhi solve kr
	// paya logic
	// const[fullNameUI,setFullNameUI] = useState({
	// 	fnameUI:'',
	// 	lnameUI:''
	// })
	function handleChange(e) {
		// const newValue = e.target.value;
		// const inputName = e.target.name;
		// above const can be declared as object destructuring
		const { value, name } = e.target;
		// by doing it in old method of creating state it can only take one input value at a time
		// if you type lname the fname value will be gone
		// below function store previous value of our inputs..
		setContact((prevValue) => {
			// spread operators se 2 line me hua kaam..
			// lekin spread operator ka concept abhi bhi nhi smjha
			return{
				...prevValue,
				[name]:value
			}
			// if (name === "fname") {
			// 	return { fname: value, lname: prevValue.lname, email: prevValue.email };
			// } else if (name === "lname") {
			// 	return { lname: value, fname: prevValue.fname, email: prevValue.email };
			// } else if (name === "email") {
			// 	return { lname: prevValue.lname, fname: prevValue.fname, email: value };
			// }
		});
	}
	const [isMouseOver, setMouseOver] = useState(false);
	// function handleClick(e) {
	// 	// setHeadingText(fname);
	// 	// setLNameText(lname);
	// 	e.preventDefault();
	// }
	// doing it by creating state of each components
	// const handleFName = (e) => setFName(e.target.value);
	// const handleLName = (e) => setLName(e.target.value);
	function changeColor() {
		setMouseOver(true);
	}
	function orgColor() {
		setMouseOver(false);
	}
	return (
		<div className='container'>
			{/* <form action='' onSubmit={handleClick}> */}
			<h1>
				Hello {contact.fname} {contact.lname} {contact.email}
			</h1>

			<input
				type='text'
				name='fname'
				// onChange={handleFName}
				onChange={handleChange}
				placeholder='First Name'
				value={contact.fname}
			/>
			<input
				type='text'
				name='lname'
				// onChange={handleLName}
				onChange={handleChange}
				placeholder='Last Name'
				value={contact.lname}
			/>
			<input
				type='text'
				name='email'
				onChange={handleChange}
				placeholder='Email'
				value={contact.email}
			/>
			<button
				// onClick={handleClick}
				onMouseOver={changeColor}
				style={{ backgroundColor: isMouseOver ? "Black" : "white" }}
				onMouseOut={orgColor}
				// type='submit'
			>
				Submit
			</button>
			{/* </form> */}
		</div>
	);
}

export default App;
