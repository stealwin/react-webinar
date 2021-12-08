import StoreModule from "../module";

class CatalogStore extends StoreModule {

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
    const response = await fetch('/api/v1/articles?limit=10&offset=10&fields=items(*),count');
    const json = await response.json();
    this.setState({
      items: json.result.items,
      all_items_count: json.result.count
    });
    console.log(json.result)
  }
}

export default CatalogStore;
