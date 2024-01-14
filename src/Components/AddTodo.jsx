import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        setInput("");

    };
    return (
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
            <input
                type="text"
                name=""
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 bottom-0 py-2 px-6 focus:outline-none">
                Add Todo
            </button>
        </form>
    );
};

export default AddTodo;
