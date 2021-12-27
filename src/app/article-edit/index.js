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
import {article} from "../../store/exports";

function ArticleEdit() {

  const store = useStore();
  // Параметры из пути
  const params = useParams();

  // Начальная загрузка
  useInit(async () => {
    await store.get('articleEdit').load(params.id);
    await store.categories.loadCategories();
    //await store.countries.loadCountries();
    await store.articleEdit.loadCountries();
  }, [params.id]);

  const select = useSelector(state => ({
    article: state.articleEdit.data,
    waiting: state.articleEdit.waiting,
    categories:state.categories.items,
    cont:state.articleEdit.countries,
    editedTitle:state.articleEdit.editData.title
  }));
  const callbacks = {
    sendEditArticle:useCallback((item,categories)=>store.articleEdit.putEditArticle(item,categories),[store])
  }

  return (
    <Layout head={<h1>{select.editedTitle ? select.editedTitle : select.article.title}</h1>}>

      <Header/>

      <Spinner active={select.waiting}>
        <ArticleCardEdit article={select.article} cat ={select.categories} count={select.cont} sendEdit={callbacks.sendEditArticle} />
      </Spinner>
    </Layout>
  );
}

export default React.memo(ArticleEdit);
