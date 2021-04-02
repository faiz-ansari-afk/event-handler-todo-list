import React, { useState } from "react";
import List from "./components/List";
import Inputform from "./components/Inputform"
import "./Todo.css";
function Todo() {
	const [inputText, setInputText] = useState("");
	const [items, setItems] = useState([]);

	function handleChange(e) {
		const inputValue = e.target.value;
		setInputText(inputValue);
		e.preventDefault();
	}
	function addItem() {
		setItems((preValue) => {
			return [...preValue, inputText];
		});
		setInputText("");
	}
	function deleteItem(id){
		// console.log("delete list");
		setItems((preValue)=>{
			return preValue.filter((item,index)=>{
				return index !== id ;
			})
		})
	}
	return (
		<div className='container'>
			<div className='heading'>
				<h1>To-Do List</h1>
			</div>
			<Inputform 
			value={inputText}
			onChange={handleChange}
			onClick={addItem}
			/>
			<div>
				<ul>
					{items.map((item,index) => (
						<List 
						key={index} 
						text={item}
						id={index}
						onChecked={deleteItem} />
					))}
				</ul>
			</div>
		</div>
	);
}
export default Todo;
