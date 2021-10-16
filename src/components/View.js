import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import articleService from '../services/articleServices';
import axiosWithAuth from '../utils/axiosWithAuth';
import Article from './Article';
import EditForm from './EditForm';

const View = (props) => {
    const [articles, setArticles] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();

    const handleDelete = (id) => {
        axiosWithAuth()
            .delete(`/articles/${id}`)
            .then((res) => {
                setArticles(res.data);
            })
            .catch((err) => console.log({ err }));
    }

    const handleEdit = (article) => {
        axiosWithAuth()
            .put(`/articles/${article.id}`, article)
            .then(res => {
                setArticles(res.data)
                setEditing(false)
            })
            .catch(err => {
                console.log(err)
        })

    }

    const handleEditSelect = (id)=> {
        setEditing(true);
        setEditId(id);
    }

    const handleEditCancel = ()=>{
        setEditing(false);
    }

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get("/articles")
    //     .then((res) => {
    //         setArticles(res.data);
    //     })
    //     .catch((err) => console.log({ err }));
    // })

    // useEffect(async () => {
    //     const articles = await articleService();
        
    //     setArticles(articles);
    //     console.log("result------------",res.data);
    // }, []);

    // useEffect(async () => {
    //     await articleService(setArticles);
        
    //     // console.log("result------------",res.data);
    // }, []);

    // useEffect(async () => {
    //   articleService(setArticles);
    // }, [])

    // useEffect(() => {
    //     const articles = async () => {
    //        const res =  await articleService();
    //         setArticles(res.data);
    //     }; 
    //     articles();
    // },[]);

    useEffect(() => {
      articleService(setArticles);
    }, [])



    return(<ComponentContainer>
        <HeaderContainer>View Articles</HeaderContainer>
        <ContentContainer flexDirection="row">
            <ArticleContainer>
                {
                    articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect}/>
                        </ArticleDivider>
                    })
                }

                {/* {articles.map((article) => {
            return (
              <ArticleDivider key={article.id}>
                <Article
                  key={article.id}
                  article={article}
                  handleDelete={() => {
                    handleDelete(article.id);
                  }}
                  handleEditSelect={() => {handleEditSelect(article.id)}}
                />
              </ArticleDivider>
            );
          })} */}

          
            </ArticleContainer>
            
            {
                editing && <EditForm editId={editId} handleEdit={handleEdit} handleEditCancel={handleEditCancel}/>
            }
        </ContentContainer>
    </ComponentContainer>);
}

export default View;

//Task List:
//1. Build and import axiosWithAuth module in the utils.
//2. When the component mounts, make an http request that adds all articles to state.
//3. Complete handleDelete method. It should make a request that delete the article with the included id.
//4. Complete handleEdit method. It should make a request that updates the article that matches the included article param.
// - [ ] In `View.js`, when the component mounts, use `articleService` to make an http request and add all articles to state.

// - [ ] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

// - [ ] `editId` is passed into the `EditForm` component. In `EditForm.js`, make a http request on mount to get the article with the id `editId`. Save the result in state.

// - [ ] In `View.js`, complete `handleEdit` so that a http request is made that updates the passed in article. Set the editing state to false when the request is complete. After successfully deleting the article on the api, update local state to reflect these changes.


const Container = styled.div`
    padding: 0.5em;
`
const HeaderContainer = styled.h1`
    border-bottom: solid black 2px;
    padding: 1em;
    margin:0;
    font-size: 1.5em;
    background: black;
    color: white;
`

const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
    padding: 1em;
`

const ComponentContainer = styled.div`
    display:flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
`

const ArticleContainer = styled.div`
    background: grey;
`;


