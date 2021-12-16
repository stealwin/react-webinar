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
  async load(limit,page){
    let skip = limit*(page-1);
    const response = await fetch('/api/v1/articles?limit='+limit+'$&skip='+skip+'&fields=items(*),count');
    const json = await response.json();
    this.setState({
      items: json.result.items,
      limit:limit,
      active_page:page,
      all_items_count: json.result.count,
      pages: json.result.count / limit,
    });
  }



}

export default CatalogStore;
