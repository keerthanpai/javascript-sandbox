let initialState = {counter:0,topics:['Angular']};

export function reducer(state=initialState, action){
    if(action.type==='INC'){
        return {...state, counter:state.counter+action.payload};
    }
    else if(action.type==='DEC'){
        return {...state, counter:state.counter-action.payload};
    }
    else if(action.type==='ADD'){
        return {...state, topics:[...state.topics,action.payload]};
    }
    return state;
}