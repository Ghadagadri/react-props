
import './App.css';
import Profile from './profile/Profile.js';

function App() {
  const handleName= (full)=>{alert(full)}; 
  const users={ fullname:'Ghada',bio:'my bio',profession:'developer', image:'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'}
  return (
    <div className="App">
     <Profile fullname={users.fullname} bio={users.bio} profession={users.profession} image={users.image} handleName={handleName}/>
    </div>
  );
}


export default App;
