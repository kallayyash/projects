/*

1. actions
2. reducer
3. store


*/

import * as Redux from "redux";
console.log(Redux);


const incAction = { type: 'INC' }
const decAction = { type: 'DEC' }

const initialState = { counter: 0 }

function counterReducer(prevState = initialState, action) {
  switch (action.type) {
    case 'INC':
      return { counter: prevState.counter + 1 }
    case 'DEC':
      return { counter: prevState.counter - 1 }
    default:
      return prevState;
  }
}

const store = Redux.createStore(counterReducer);

store.subscribe(function listener() {
  console.log(store.getState())
})

store.subscribe(function listener() {
  document.querySelector("span").textContent=store.getState().counter;
})

const incBtn = document.querySelector("#inc")
incBtn.addEventListener('click', function () {
  store.dispatch(incAction);
})

const decBtn = document.querySelector("#dec")
decBtn.addEventListener('click', function () {
  store.dispatch(decAction);
})
