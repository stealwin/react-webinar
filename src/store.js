class Store {
  constructor(initState) {
    // Состояние приложения (данные)
    this.state = initState;
    // Подписчики на изменение state
    this.listners = [];
    this.arr = [];
  }

  /**
   * Подписка на изменение state
   * @param callback {Function}
   */
  subscribe(callback) {
    this.listners.push(callback);
    // Возвращаем функцию для отписки
    return () => {
      this.listners = this.listners.filter(item => item !== callback);
    }
  }

  /**
   * Выбор state
   * @return {*}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {*}
   */
  setState(newState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  // Действия приложения.
  // @todo
  // Нужно вынести в отдельный слой, так как Store не определяет конкретную структуру состояния.
  // Может быть как модуль (расширение) для Store

  /**
   * Создание записи
   */
  createItem() {
    const code = Math.max(0, ...this.state.items.map(item => item.code)) + 1;
    this.setState({
      items: this.state.items.concat({
        code,
        title: 'Новая запись №'+code
      })
    });
  }

  /**
   * Удаление записи по её коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      items: this.state.items.filter(item => item.code !== code)
    });
  }

  addToBasket(code){

    for (const item of this.state.items) {
      if(item.code == code){
        this.arr.push(item)
      }
    }
    this.setState({
      items: this.state.items,
      itemsBasket:this.arr
    });
    console.log(this.state.itemsBasket );
    console.log(this.state.items );

  }

  /**
   * Выделение записи по её коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.code === code){
          return {
            ...item,
            selected: !item.selected
          };
        }
        return item;
      })
    });
  }
}

export default Store;