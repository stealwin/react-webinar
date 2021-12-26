import StoreModule from "../module";

class CountriesStore extends StoreModule{
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items:[]
    }
  }

  async loadCountries(){
    const responseCategories = await fetch(`api/v1/countries?limit=*&fields=_id,title,code&sort=title.ru`);
    const jsonCategories = await responseCategories.json();
    this.setState({
      items:jsonCategories.result.items

    })
  }


}

export default CountriesStore;
