import StoreModule from "../module";

class CategoriesStore extends StoreModule{
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items:[]
    }
  }

  async loadCategories(){
    const responseCategories = await fetch(`api/v1/categories?limit=*&fields=_id,parent,title`);
    const jsonCategories = await responseCategories.json();
    this.setState({
      items:jsonCategories.result.items

    })
  }


}

export default CategoriesStore;
