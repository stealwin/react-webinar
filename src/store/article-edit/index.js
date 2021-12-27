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
      editData:{},
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
    this.updateState({
      countries:jsonCategories.result.items

    })
  }

  async putEditArticle(article,cat){
    let itemHeader = document.querySelector(".ArticleCardEdit-Name").value;
    let itemDescr = document.querySelector(".ArticleCardEdit-Description").value;
    let itemYear = document.querySelector(".ArticleCardEdit-Value--Year").value;
    let itemPrice = document.querySelector(".ArticleCardEdit-Value--Price").value;

    let selectedCountry = document.querySelector(".SelectCategory-country").value;
    let selectedCategory = document.querySelector(".SelectCategory-category").value;

    let itemSelectedCounty = this.getState().countries.find((item)=>item._id===selectedCountry);
    let itemSelectedCategory = cat.find((item)=>item._id===selectedCategory);

    this.updateState({
        editData:{...this.getState().data,
        title:itemHeader,
        description:itemDescr,
          edition:itemYear,
          price:itemPrice,
          maidIn:itemSelectedCounty,
          category:itemSelectedCategory
      }
    });
    let editedArticle = this.getState().editData;
    const response = await fetch(`/api/v1/articles/${editedArticle._id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedArticle)
    });
    const json = await response.json();
    console.log(json);

  }


}

export default ArticleEditStore;
