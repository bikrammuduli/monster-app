import React from 'react';
import PropsExamples from './PropsExamples';


function FunctionalComponent(){
    return (
        <div>
            <h1>Functional Component</h1>

        </div>
    );
}

class ClassComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            name: 'Bikram',
            age: 30
        }
    }

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
     //    {
     //       {
     //           name :name
     //         value:arjun
     //       } 
     //       {
     //         name: age,
     //         value: 23
     //       }
     //    }
    }

    render(){
        return (
            <div>
                <h1>Class Based Component</h1>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <PropsExamples name={this.state.name} age={this.state.age}/>
                <form>
                    <input onChange={this.handleChange} name='name' type="text"  />
                    
                </form>
            </div>
        )
    }

}

export {FunctionalComponent, ClassComponent};
