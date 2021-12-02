class Store {
  constructor(initState) {
    // Состояние приложения (данные)
    this.state = initState;
    // Подписчики на изменение state
    this.listners = [];
    //Массив для корзины
    this.arr = [];
    this.arr2=[];
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
//Добавляем товар в корзину
  //Берем кликнутый товар помещаем в массив
  //считаем количество повторяющихся товаров
  //кладем в массив уже уникальные значения, со свойством quantity, со значением повтора из предыдущего массива


  addToBasket(code){
    for (const item of this.state.items) {
      if(item.code == code){
        this.arr.push({...item,
        quantity:0,
        countWord:"шт"});
      }


    }
   this.arr = this.arr.filter((v,i,a)=>
       a.findIndex(t=>(t.code===v.code))===i);
    console.log("this arr2");
    console.log(this.arr);
  /*  function forFilter(item,pos){
      return this.arr.indexOf(item) == pos;
    }
    let bindFilter = forFilter.bind(this.arr);*/

    if(this.arr.length>0){
      console.log("11");

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