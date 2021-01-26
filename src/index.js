import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import currency_list from './components/ExchangePage/components/coin_data/coins_data'
import App from './components/app/app';

// в функции передается стэйт и экшн
const currencys = (state = [], action) => {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.currencys
        ]
    }

    return state;
}


const store = createStore(currencys)

store.subscribe(() => {
    console.log('subscribe', store.getState())
}) 

store.dispatch({'type':'ADD_TRACK', currencys: currency_list})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

