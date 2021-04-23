import React from 'react'
import ReactDOM from 'react-dom'

class Eh extends React.Component{
   constructor(props){
     super(props);
     this.state={username:'',
    age:null,
    errmsg:'',
    car:''
  }
   }
   submitf=()=>{
     alert(this.state.username+" do you want to submit ?")
   }
   changehandler = (event)=>{
     let n= event.target.name;
     let v= event.target.value;
     let err='';
     if(n==="age"){
       if(v!=""&& !Number(v))
       err=<strong> Age must be a number </strong>
     }
     this.setState({errmsg:err})
     this.setState({[n]:v})
     
   }
   
   render(){
    let header=''
    if(this.state.username)
    header=<h1>Hello {this.state.username} {this.state.age} {this.state.car} </h1>
    else
    header=''
    
     return(
       <form onSubmit={this.submitf}>
         {header}
         <h1>Enter Your name</h1>
         <input type='text'
         name='username'
         onChange= {this.changehandler}></input>
         <input type='text'
         name='age'
         onChange= {this.changehandler}></input>
         {this.state.errmsg}
         <select name='car' onChange= {this.changehandler}>
           <option value="first"> 1 </option>
           <option value="Seocnd"> 2 </option>
           <option value="Third"> 3 </option>
         </select>
         <button type='submit'>Submit</button>
       </form>
     )
   }
}

export default Eh