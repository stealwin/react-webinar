import React, {useCallback} from "react";
import Layout from "../../components/layout";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import {useParams} from "react-router-dom";
import Spinner from "../../components/spinner";
import ArticleCard from "../../components/article-card";
import Header from "../../containers/header";
import useInit from "../../utils/use-init";
import ArticleCardEdit from "../../components/article-card-edit";

function ArticleEdit() {

  const store = useStore();
  // Параметры из пути
  const params = useParams();

  // Начальная загрузка
  useInit(async () => {

    await store.categories.loadCategories();
    await store.countries.loadCountries();
    await store.articleEdit.loadCountries();
  }, [params.id]);

  const select = useSelector(state => ({
    article: state.article.data,
    waiting: state.article.waiting,
    categories:state.categories.items,
    countries:state.countries.items,
    cont:state.articleEdit.countries
  }));
  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
  }

  return (
    <Layout head={<h1>{select.article.title}</h1>}>

      <Header/>

      <Spinner active={select.waiting}>
        <ArticleCardEdit article={select.article} onAdd={callbacks.addToBasket}
                         cat ={select.categories} count={select.cont} />
      </Spinner>
    </Layout>
  );
}

export default React.memo(ArticleEdit);
