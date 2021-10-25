import { useState } from 'react'
import { Link } from 'react-router-dom'

const EditUser = () => {

  const [text, setText] = useState('')

  return (
    <form className='add-form'>
      <h5>Edit User's Name</h5>
      <div className='form-group'>
        <label>Edit Name</label>
        <input type="text" className="form-control" placeholder="User Name" value={text}/>
      </div>

      <input type="submit" value="Save Name" className="btn btn-primary"/>

    </form>
  )
}

export default EditUser
