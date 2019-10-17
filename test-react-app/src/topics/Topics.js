import React from 'react';

export class Topics extends React.Component{
    label = "Topics";
    constructor(props){
        super(props);
        this.state = {
            topics:[]
        }
    }

    addtopic = () => {
        let item = this.refs.itemref.value;
        this.setState({
            topics:[...this.state.topics,item]
        });
    }

    render(){
        let topiclist = (this.state.topics).map( (item) => {
            return (<li>{item}</li>)
        });

        return (
            <div>
                <h3>{this.label}</h3>
                <input type='text' name='item' ref="itemref"></input>
                <button onClick={this.addtopic}>Add</button>
                <ul>
                    {topiclist}
                </ul>
            </div>
        )
    }
}