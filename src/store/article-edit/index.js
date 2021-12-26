import StoreModule from "../module";
import {categories, countries} from "../exports";

class ArticleEditStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      data: {},
      countries:[],
      waiting: true
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(id){

    this.updateState({
      waiting: true,
      data: {}
    });

    try {
      const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
      const json = await response.json();
      if (json.error) throw new Error(json.error);

      this.updateState({
        data: json.result,
        waiting: false
      });

    } catch (e){
      this.updateState({
        data: {},
        waiting: false
      });
    }
  }

  async loadCountries(){
    const responseCategories = await fetch(`api/v1/countries?limit=*&fields=_id,title,code&sort=title.ru`);
    const jsonCategories = await responseCategories.json();
    console.log(jsonCategories.result.items)
    this.updateState({
      countries:jsonCategories.result.items

    })
  }

}

export default ArticleEditStore;
