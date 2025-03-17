import React from 'react'

const UserLoginForm = ({ onSubmit }) => {
  return (
      <div className='card bg-dark text-white'>
        <form onSubmit={(e) => onSubmit(e)} className='card-body d-flex flex-column justify-content-center align-items-center'>
          <h2>Login</h2>
          <div className="form-group my-2">
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" id="username" name="username" />
          </div>
          <div className="form-group my-2">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default UserLoginForm