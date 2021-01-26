
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../components/app';
// import currency_list from '../components/ExchangePage/components/coin_data/coins_data'

// // в функции передается стэйт и экшн
// const currencys = (state = [], action) => {
//     if(action.type === 'ADD_TRACK') {
//         return [
//             ...state,
//             action.currencys
//         ]
//     }

//     return state;
// }

// //хранилище всех данных приложения
// const store = createStore(currencys)

// //подписаться на изменения в стор
// store.subscribe(() => {
//     console.log('subscribe', store.getState())
// }) 

// //диспач вызывает экшн (единственный способ поменять значение в стор) {type:''} обязательно
// store.dispatch({'type':'ADD_TRACK', currencys: currency_list})

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// )