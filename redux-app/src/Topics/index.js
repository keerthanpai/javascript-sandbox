import React from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {topics:state.topics};
}

function mapDispatchToProps(dispatch) {
    return {
        addtopic:() => {
            let action = {type:'ADD', payload:document.getElementById('tx').value}

            dispatch(action);
        }
    }
}

export function TopicsComp(props) {
    let tmp = props.topics.map((t) => {
        return (<li>{t}</li>)
    });

    return (
        <div className="container">
            <h3>Topics</h3>
            <input type='text' id='tx'></input>
            <button onClick={props.addtopic}>Add</button>
            <ol>
                {tmp}
            </ol>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsComp)
