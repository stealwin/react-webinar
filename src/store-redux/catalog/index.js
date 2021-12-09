const initState = {
  items: [],
}

export default function reducer(state = initState, action){

  if (action.type === 'catalog/load'){
    return {
      items: action.payload.items
    }
  }

  return state;
}
