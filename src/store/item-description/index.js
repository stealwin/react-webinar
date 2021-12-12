import StoreModule from "../module";
import CatalogStore from "../catalog";

class ItemDescriptionStore extends CatalogStore {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      item: [],
    };
  }




  async loadById(id){
    const response = await fetch('/api/v1/articles/'+id+'?fields=*,maidIn(title,code),category(title)');
    const json = await response.json();
    this.setState({
      selectedItem:json.result
    });
  }

}

export default ItemDescriptionStore;
