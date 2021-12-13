import CatalogStore from "../catalog";
import StoreModule from "../module";

class ItemDescriptionStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      item: [],
    };
  }

  async loadById(id){
    this.setState({});
    console.log("from basket")
    const response = await fetch('/api/v1/articles/'+id+'?fields=*,maidIn(title,code),category(title)');
    const json = await response.json();
    this.setState(
      json.result
    );
  }

}

export default ItemDescriptionStore;
