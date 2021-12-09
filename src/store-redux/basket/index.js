/**
 * Начальное состояние
 */
const initState = {
  items: [],
  sum: 0,
  amount: 0,
};

export default function reducer(state = initState, action){

  if (action.type === 'basket/add'){
    return {
      ...state,
      items: action.payload.items,
      amount: action.payload.amount,
      sum: action.payload.sum
    }
  }
  return state;
}
