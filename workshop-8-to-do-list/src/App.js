import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import List from './components/List/List';
import Alert from './components/Alert/Alert';


import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({show: false, message: '', type: ''});
  const [checkEdit, setCheckEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  

  const submitData = (e) => {
    e.preventDefault();
    if(!title) {
      setAlert({show: true, message: 'Please enter a title', type: 'error'});
    }else if(checkEdit && title){
      const result = list.map((item)=>{
        if(item.id === editID){
          return{...item, title: title}
        }return item;
      })
      setList(result);
      setCheckEdit(false);
      setTitle('');
      setEditID(null);
      setAlert({show: true, message: 'Update data success', type: 'success'});
    }else{
      const newItem = {
        id: uuidv4(),
        title: title
      }
      setList([...list, newItem]);
      setTitle('');
      setAlert({show: true, message: 'Add data success', type: 'success'});
    }
  }

  const removeItem = (id) => {
    const result = list.filter(item => item.id !== id);
    setList(result);
    setAlert({show: true, message: 'Remove data success', type: 'error'});
  }

  const editItem = (id) => {
    setCheckEdit(true);
    setEditID(id);
    const searchItem = list.find((item) => item.id === id);
    setTitle(searchItem.title);
    }

  return (
    <div className="container">
      <h1> To Do List App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className='form-group' onSubmit={submitData}>
        <div className='form-control'>
          <input type='text' className='text-input' placeholder='Add To Do'
          onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button type='submit' className='submit-btn'>
            {checkEdit ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
        })}
      </section>
    </div>
  );
}

export default App;
