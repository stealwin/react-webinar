import StoreModule from "../module";

class CatalogStore extends StoreModule {
 countItems;
  limit=10;
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
    console.log(page,limit);
    let skip = limit*(page-1);
    const response = await fetch('/api/v1/articles?limit='+limit+'$&skip='+skip+'&fields=items(*),count');
    const json = await response.json();
    this.countItems=json.result.count;
    this.setState({
      items: json.result.items,
      all_items_count: json.result.count,
      pages: json.result.count / limit,
    });
  }



}

export default CatalogStore;
