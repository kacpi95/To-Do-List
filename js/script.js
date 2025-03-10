"use strict";

const todoInput = document.querySelector(".todo-input");
const errorInfo = document.querySelector(".error-info");
const todoUlList = document.querySelector(".todolist ul");
const btnAdd = document.querySelector(".btn-add");
const btnDone = document.querySelector(".complete");
const btnEdit = document.querySelector(".edit");
const btnDelete = document.querySelector(".delete");
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup-input");
const popupInfo = document.querySelector(".popup-info");
const popupBtnAdd = document.querySelector(".accept");
const popupBtnCancel = document.querySelector(".cancel");

const addNewTodo = () => {
	if (todoInput.value !== "") {
		const newTodoLiList = document.createElement("li");
		newTodoLiList.textContent = todoInput.value;

		todoUlList.append(newTodoLiList);
		todoInput.value = "";
	} else {
		errorInfo.textContent = `Wpisz treść zadania`;
	}
};

btnAdd.addEventListener("click", addNewTodo);
