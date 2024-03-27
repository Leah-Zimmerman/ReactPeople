import React from "react";
import PersonRow from "./PersonRow";
import PersonForm from "./PersonForm";

class PeopleTable extends React.Component{
    state={
        firstName:'',
        lastName:'',
        age:'',
        people: []
    }
    onFirstNameTextboxChange=(e)=>{
        this.setState({firstName:e.target.value})
    }
    onLastNameTextboxChange=(e)=>{
        this.setState({lastName:e.target.value})
    }
    onAgeTextboxChange=(e)=>{
        this.setState({age:e.target.value})
    }
    onAddClick=()=>{
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        };
        const copy = [...this.state.people];
        copy.push(person);
        this.setState({people:copy,firstName:'',lastName:'',age:''});
    }
    onClearClick=()=>{
        this.setState({people:[],firstName:'',lastName:'',age:''});
    }
    render(){
        const peopleArray=this.state.people;
        return(<>
            <PersonForm 
                    firstName={this.state.firstName}
                    lastName = {this.state.lastName}
                    age={this.state.age}
                    firstNameText={this.onFirstNameTextboxChange}
                    lastNameText={this.onLastNameTextboxChange}
                    ageText={this.onAgeTextboxChange}
                    add={this.onAddClick}
                    clear={this.onClearClick}/>
                    <div className="col-md-8 offset-md-2 mt-3">
                        {peopleArray.length===0?(<h2>No people added yet! Add some people!</h2>):
                         (<table className="table table-hover table-bordered table-striped">
                <thead>
                   <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                   </tr>
                </thead>
                <tbody>                                      
                    <PersonRow 
                    people={this.state.people}/>
                </tbody>
            </table>)}
            </div>
            </>
        )
    }
}
export default PeopleTable;