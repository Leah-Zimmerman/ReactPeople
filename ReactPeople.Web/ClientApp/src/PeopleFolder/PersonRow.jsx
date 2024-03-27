import React from "react";

class PersonRow extends React.Component{
    render(){
        return(<>
            {this.props.people.map(p=><tr>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.age}</td>
            </tr>)}
            </>
        )
    }
}
export default PersonRow;