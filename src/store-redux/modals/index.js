const initState = {
  name: false
}

export default function reducer(state = initState, action){


  if (action.type === 'modals/open'){

    return {
      name: action.payload.name
    }
  }

  if (action.type === 'modals/close'){

    return {
      name: false
    }
  }

  return state;
}
