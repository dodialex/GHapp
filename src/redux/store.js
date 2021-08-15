import {createStore} from 'redux';

const initialState = {
    name: 'Dodi A',
    Alamat: 'Grogol'
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer)

export default store; 