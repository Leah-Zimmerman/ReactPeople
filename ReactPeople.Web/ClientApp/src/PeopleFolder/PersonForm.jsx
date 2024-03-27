import React from "react";

class PersonForm extends React.Component{
    render(){
        return(
            <div className="bg-light mt-3 p-4 shadow col-md-8 offset-md-2">
            <div className='row'>
            
            <div className='col-md-2 offset-md-1'>
                <input className='form-control' onChange={this.props.firstNameText} type='text' value={this.props.firstName}  placeholder='First Name'></input> 
            </div>
            <div className='col-md-2'>
                <input className='form-control' onChange={this.props.lastNameText} type='text' value={this.props.lastName}  placeholder='Last Name'></input> 
            </div>
            <div className='col-md-2'>
                <input className='form-control' onChange={this.props.ageText} type='text' value={this.props.age}  placeholder='Age'></input> 
            </div>
            <div className='col-md-2'>
                <button className='btn btn-primary w-100' onClick={this.props.add}>Add</button>
            </div>
            <div className='col-md-2'>
                <button className='btn btn-warning w-100' onClick={this.props.clear}>Clear All</button>
            </div>
            </div>
            </div>
        )
    }
}
export default PersonForm;