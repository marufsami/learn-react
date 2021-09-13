import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let compnayName = "NZAT";
  let style = {
    color:"black"
  }
  const products = [
    {name:"Drone-f55", price:"188$"},
    {name:"liye-345", price:"144$"},
    {name:"chinchan-245", price:"133$"}
  ]
  const nayoks = ["Shakrukh Khan", "Salman Khan", "Hrittik Rowshan", "Tiger Shroff", "Jackie Chan", "Tom Cruise", "Tony Stark"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>
            {compnayName} Company will rule the world in 2030.
        </p>
        <Counter></Counter>
        <div style={{backgroundColor:"blue"}}>
           {nayoks.map(nayok => <li>{nayok}</li> )}
           {products.map(product => {
           <h4>{product.name}</h4>
})}
        </div>
        <p>Greatest Person of the year.</p>
        <Person name="Maruf Sami" company="NZAT GROUP"></Person>
        <Person name="Elon Musk" company="SPACE-X"></Person>
        <Person name="Jeff Bezos" company="AMAZON"></Person>
        <Person name="Mark Zukerburg" company="FACEBOOK"></Person>
        <Person name="Richard Brandson" company="Virgin Grouop"></Person>
        {
          products.map((pd) => <Product product={pd}></Product>)
        }
        <Users></Users>
</header>      
    </div>
  );
}
function Person(props){
  const personStyle = {
    border:"2px solid black",
    padding:"20px",
    backgroundColor:"white",
    color:'black'
  }
  return (
    <div style={personStyle}>
        <h2>{props.name}</h2>
        <h5>Company : {props.company}</h5>
    </div>
  )
}
function Product(props){
    const {name, price} = props.product;
    return(
      <div className="card">
          <h2>Product Name : {name}</h2>
          <h2>Product Price : {price}</h2>
          <button type="">Buy Now!</button>
      </div>
    )
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleBtn = ()=> setCount(count + 1);
  return(
    <div>
      <p>Count : {count} </p>
      <button type="" onClick={()=> setCount(count - 1)}>Decrease</button>
      <button type="" onClick={handleBtn}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <div>
        {users.map(user => <li>{user.email}</li>)}
      </div>
    </div>
  )
}
export default App;
