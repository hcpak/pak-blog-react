import React from 'react';
import './App.css';
import Customer from './components/Customer';
const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'pak',
    'birthday': '950703',
    'gender': 'male',
    'job': 'student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'hyung',
    'birthday': '950703',
    'gender': 'male',
    'job': 'programmer'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'chul',
    'birthday': '950703',
    'gender': 'male',
    'job': 'student'
  },
]

function App() { // component가 재사용률이 매우 낮아지고, hook란 것이 생겨서 이제 function 형태로 해도 state 함수를 쓸 수 있다.
  return (
    <div>
      {
        customers.map(c =>{
          return (
            <Customer
              key ={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          ) 
        })
      }
    </div>
  );
}

export default App;
