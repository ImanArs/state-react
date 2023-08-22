import React, { useState } from 'react'
// import Counter from './components/Counter'
// import Comment from './components/Comment'
// import Rick from './components/Rick'

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    name: '',
    desc: ''
  })

  const addFormHandler = () => {
    setUsers([...users, user])
    setUser({
      name: '',
      desc: ''
    })
  }
  const changeInput = (key, event) => {
    setUser({...user, [key]: event.target.value},
      console.log(event.target)
      )
  }
  return (
    <>
      <div style={{width: 300}}>
        <input type="text" name="" id="" value={user.name} onChange={(e) => changeInput('name', e)} />
        <textarea name="" id="" cols="30" value={user.desc} rows="10" onChange={(e) => changeInput('desc', e)}></textarea>
        <button onClick={addFormHandler}>create User</button>
      </div>
      <ul>
        {users.map((item,index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
