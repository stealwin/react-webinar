import StoreModule from "../module";

class CategoriesStore extends StoreModule{
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items:[],
      modifiedItems:[]
    }
  }

  async loadCategories(){
    const responseCategories = await fetch(`api/v1/categories?limit=*&fields=_id,parent,title`);
    const jsonCategories = await responseCategories.json();
    this.setState({
      items:jsonCategories.result.items

    })
  }

  getFullTree (rootArray)  {
    console.log(rootArray);
    const getTree = (array, parent = null, inner = 0) => {
      return array.reduce((arr, elem) => {
        if (elem.parent && elem.parent._id !== parent) {
          return arr;
        }

        arr.push({
          ...elem,
          title: `${'-'.repeat(inner)}${elem.title}`,
        });

        const children = rootArray.filter((item) => item.parent && item.parent._id === elem._id);
        if(!children) {
          return arr;
        }
        const childArr = getTree(children, elem._id, inner + 1);
        return arr.concat(childArr);
      }, []);
    }
    return this.setState({
            ...this.getState(),
           modifiedItems: getTree(rootArray)
    })
  }


}

export default CategoriesStore;
