import React from 'react';

class PropsExamples extends React.Component{

    render(){
        return(
            <div>
                <h1>Calling Props</h1>
                <p>Props Name: {this.props.name}</p>
                <p>Props Age: {this.props.age}</p>
            </div>   
        )
    }

}

export default PropsExamples