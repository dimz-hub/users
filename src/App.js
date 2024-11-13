import Card from "./component/card";
import React , {useState} from 'react'

function App() {
const [users, setUsers ] = useState([
  {
    id:1,
    name: 'John Doe',
    age: '28 years old',
    info: 'A passionate wildlife enthusiast and photographer, often found exploring.',

    email: '',
    src : './images/user1.jpg',
    transform : 'right'
  },
  {
    id:2,
    name: 'Jane Smith',
    age: '',
    info: 'An avid reader and aspiring novelist, jane loves spending her weekends at local cafes.',

    email: 'janesmith@example.com',
    src : './images/user2.jpg',
    transform : 'left'
  },
  
  {
    id:3,
    name: '',
    age: '45 years old',
    info: ' Tech-savvy and innovative, Sarh is known for her cutting-edge software solutions.',

    email: 'mikebrown @example.com',
    src : './images/user3.jpg',
    transform : 'right'
  },
  {
    id:4,
    name: 'Sarah Johnson',
    age: '30 years old',
    info: ' A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country',

    email: 'sarahjohnson@example.com',
    src : './images/user4.jpg',
      height : '300px',
      transform : 'left'
  },
  {
    id:5,
    name: 'Alex Martinez',
    age: '27 years old',
    info: '',

    email: '',
    src : './images/user5.jpg',
      height : '200px',
      transform : 'right'
      
  },

])


function handleRemove(id) {

  const updatedItems = users.filter(user => user.id !== id)
  setUsers(updatedItems)
  
}
// console.log(users)


  
  

  return (
    <div className="flex items-center m-[auto] justify-center    ">
      <div className=" w-[750px] m-[auto] mt-[20px] ">
      <div className="flex gap-[15px] flex-wrap ">
        {users.map((user ) => {
          return <div >
            <Card key={user.id}  name ={user?.name} id = {user.id} onRemove = {handleRemove}  age = {user?.age} transform = {user?.transform} info = {user?.info} height = {user?.height}  email={user?.email} src ={user?.src}  />
          </div>
        })}

       
      </div>
      </div>

    </div>

  );
}

export default App;
