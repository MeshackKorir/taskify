import React from 'react'
import "./Style.css"

const InputField = () => {
  return (
    <form className='input'>
        <input type="text" placeholder='Enter a task' className='input_box'></input>
        <button className="input_submit" type="submit">Go</button>

    </form>
  )
}

export default InputField