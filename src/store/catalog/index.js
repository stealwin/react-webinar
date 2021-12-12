import StoreModule from "../module";

class CatalogStore extends StoreModule {
 countItems;
  limit=10;
  selec;
  isSelected=false;
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(limit,skip){
    const response = await fetch('/api/v1/articles?limit='+limit+'$&skip='+skip+'&fields=items(*),count');
    const json = await response.json();
    this.countItems=json.result.count;
    this.setState({
      items: json.result.items,
      all_items_count: json.result.count
    });
  }
  pagination(){
    const count = this.countItems
    const limit = this.limit;
    const pages = count / limit;
    return pages;
  }
  async loadById(id){
    const response = await fetch('/api/v1/articles/'+id+'?fields=*,maidIn(title,code),category(title)');
    const json = await response.json();
    this.setState({
      ...this.getState(),
      selectedItem:json.result
    });
  }

}

export default CatalogStore;
