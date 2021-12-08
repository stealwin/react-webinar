import StoreModule from "../module";

class CatalogStore extends StoreModule {
 countItems;
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
  async load(){
    const response = await fetch('/api/v1/articles?limit=10$&offset=10&fields=items(*),count');
    const json = await response.json();
    this.countItems=json.result.count;
    this.setState({
      items: json.result.items,
      all_items_count: json.result.count
    });
  }
  pagination(){
    const count = this.countItems
    const limit = 10;
    const pages = count / limit;
    return pages;
  }
}

export default CatalogStore;
