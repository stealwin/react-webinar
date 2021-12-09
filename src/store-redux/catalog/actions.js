

export default {

  load: () => {
    return async (dispatch, getState) => {

      const response = await fetch('/api/v1/articles');
      const json = await response.json();
      dispatch({
        type: 'catalog/load',
        payload: {
          items: json.result.items
        }
      });
    }
  }
}
