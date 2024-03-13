import './App.css';
import { useState } from 'react';

function App() {
  const [isedit,setisedit]= useState(false)
  const [edit,setedit] = useState('')
  let cnt=0;
  const obj = {
    no:'',
    fname:'',
    mname:'',
    lname:'',
    math:'',
    science:'',
    english:'',
    computer:'',
    social:''
  }
  const [print,setprint]=useState([])
  const [data,setdata]=useState(obj)

  const getData = (e) => {
    setdata({...data,[e.target.name]:e.target.value});
  }

  const result = () => {
    if(isedit){
      const updateData=[...print];
      updateData[edit]=data;
      setprint(updateData);
      setisedit(false);
    }
    else{
      setprint([...print,data]);
      setdata('');
    }
    if(data.math){
      cnt++;
    }
    if(data.science){
      cnt++;
    }
    if(data.english){
      cnt++;
    }
    if(data.computer){
      cnt++;
    }
    if(data.social){
      cnt++;
    }
  }

  const deleteTask = (dltId) => {
    const dltData=print.filter((val,index)=>{
      return index !== dltId;
    })
    setprint(dltData);
  }

  const editTask = (eId) => {
    setedit(eId);
    setisedit(true);
    let update=print[eId]
    setdata(update);
  }

  return (
    <>
      <h1>Student Result</h1>
      <div>
          <label for='fname'/>First Name :-
          <input type='text' placeholder='fname' value={data.fname} name='fname' onChange={getData}/>
          <label for='mname'/>Middle Name :-
          <input type='text' placeholder='mname' value={data.mname} name='mname' onChange={getData}/>
          <label for='lname'/>Last Name :-
          <input type='text' placeholder='lname' value={data.lname} name='lname' onChange={getData}/>
          <label for='math'/>Math:-
          <input type='text' placeholder='math' value={data.math} name='math' onChange={getData}/>
          <label for='science'/>Science:-
          <input type='text' placeholder='science' value={data.science} name='science' onChange={getData}/>
          <label for='english'/>English:-
          <input type='text' placeholder='english' value={data.english} name='english' onChange={getData}/>
          <label for='computer'/>Computer:-
          <input type='text' placeholder='computer' value={data.computer} name='computer' onChange={getData}/>
          <label for='social'/>Social Science:-
          <input type='text' placeholder='social science' value={data.social} name='social' onChange={getData}/>
          <button onClick={result}>Submit</button>
      </div>
      
     
      <table border={1}>
        <tr>
          <th>Sr.No</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Computer</th>
          <th>Social Science</th>
          <th>Total</th>
          <th>Avg</th>
          <th>Action</th>
        </tr>
        {
          print.map((item,index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{item.fname}</td>
                <td>{item.mname}</td>
                <td>{item.lname}</td>
                <td>{item.math}</td>
                <td>{item.science}</td>
                <td>{item.english}</td>
                <td>{item.computer}</td>
                <td>{item.social}</td>
                <td>{parseInt(item.math)+parseInt(item.science)+parseInt(item.english)+parseInt(item.computer)+parseInt(item.social)}</td>
                <td>{[parseInt(item.math)+parseInt(item.science)+parseInt(item.english)+parseInt(item.computer)+parseInt(item.social)]/5}</td>
                <button onClick={()=>{deleteTask(index)}}>Delete</button>
                <button onClick={()=>{editTask(index)}}>Edit</button>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;
