import {useState} from "react";

function SearchForm({searchPost,dataPost}){

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (el) => {
        el.preventDefault();
        searchPost(inputValue).then( data => dataPost(data));
        setInputValue('');
    }

    const handleChange = (el) => {
        setInputValue(el.currentTarget.value);
    }

    return (
        <form className='search_form' onSubmit={handleSubmit}>
            <input type="text"
                   value={inputValue}
                   onChange={handleChange}
            />
            <button>search</button>
        </form>
    )
}

export default SearchForm;