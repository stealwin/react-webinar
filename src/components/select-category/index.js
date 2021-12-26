import React, {useCallback} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname'
import './styles.css';

function SelectCategory(props){
  console.log(props)

  // CSS классы по БЭМ
  const className = cn('SelectCategory');

  const onSelect = useCallback((e) => {
    props.onChange(e.target.value);
  }, [props.onChange])

  /*
1  Идем по массиву данных, если parent == null, то кладем в option item.title,
2 Если нет, то берем parent._id  и идем и сравнивать parent._id с item._id
3  Если совпадает, то записываем ребенка и родителя и проверяем у родителя наличие parent
и повторяем пункты 1 или 2

  * */

  let arr = [];

  function categoryTree(categories,parentId=null,prefixAmount=0){
    console.log(categories);
    let arr2 = [];
    let findItem2 = [];

        categories.forEach((category)=>{
   /*   if(prefixAmount){
        category.title = "-".repeat(prefixAmount) + category.title;
        console.log(1)
      }*/
      if (category.parent==null){
        let isExistsItem = arr.some(item=>item==category);
        if(!isExistsItem){
          arr.push(category);
          parentId = category._id;
        }
     /*   categories.forEach(child=>{
          if(child.parent==null){
            let isExistsItem = arr.some(item=>item==category);
            if(!isExistsItem){
              arr.push(category);
            } else {
              return
            }
          } else{
            if(category._id==child.parent._id){
              arr.push(child)
              categories.forEach(childNext=>{
                if(childNext.parent==null){
                  let isExistsItem = arr.some(item=>item==category);
                  if(!isExistsItem){
                    arr.push(category);
                  } else {
                    return
                  }
                } else {
                  if (child._id==childNext.parent._id){
                    arr.push(childNext)
                    categories.forEach(childNextNext=>{
                      if(childNextNext.parent==null){
                        let isExistsItem = arr.some(item=>item==category);
                        if(!isExistsItem){
                          arr.push(category);
                        } else {
                          return
                        }
                      } else {
                        if (childNext._id==childNextNext.parent._id){
                          arr.push(childNextNext)
                        }
                      }
                    })
                  }
                }
              })

            }
          }

        })*/
        //Берем category._id идем по всему массиву, проверяя со следующими элементами с categoryItem.parent._id
        //если совпадаетто кладем товар в пуш, под родительскую категорию
        /*findItem = categories.filter((item)=>item.parent?._id ==category._id);
       arr = arr.concat(findItem)
        console.log(arr)*/

      } else {
        if (parentId==category.parent._id){
          console.log(1)
          arr.push(category);

          categories.forEach(sib =>{

          })

        }

        /* findItem2 = arr.find((item)=>item._id ==category.parent._id);
        if(findItem2._id==category.parent._id){
          arr.push(category);
          console.log(category._id, "fun")
          //categoryTree(arr, category._id,prefixAmount++)
        }*/



      }



          //categoryTree(categories, category._id)
    })
    return arr

  }

 // console.log(categoryTree(props.options));
  return (
    <select className={className()} onChange={onSelect} value={props.value}>
      {!props.isEdit && <option value={1}>Все</option>}
      {props.options.map(item => (
        <option key={item._id} value={item._id}>{item.title}</option>
      ))}
    </select>
  )
}

SelectCategory.propTypes = {
  options: propTypes.arrayOf(propTypes.object).isRequired,
  value: propTypes.any,
  onChange: propTypes.func
}

SelectCategory.defaultProps = {
  onChange: () => {
  }
}

export default React.memo(SelectCategory);
