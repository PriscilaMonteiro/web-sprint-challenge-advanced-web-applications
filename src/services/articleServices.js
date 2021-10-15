import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (setArticles)=> {
  axiosWithAuth()
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      // console.log("res********", res.data);
      setArticles(res.data);
      
    })
    .catch(err => console.log({ err }));
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.