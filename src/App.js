import './App.css';
import SearchForm from "./components/searchForm";
import {useState} from "react";
import PostItem from "./components/postItem";
import CommentItem from "./components/commentItem";

function App() {

    const [postList, setPostList] = useState([])
    const [commentsList, setcommentsList] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/'
    // const searchPost = (id) => {
    //     fetch(url + 'posts/' + id).then(response => {
    //         // let data = response.json();
    //         let data = response.json();
    //         console.log(data);
    //         setPostList([...postList , data]);
    //     })
    // }

    // Запит на отримання поста і обробку

    function searchPost(id){
        return fetch(url + 'posts/' + id).then(response => {
            return response.json()
        })
    }
    let dataPost = (data) => {
        setPostList([data]);
        setcommentsList([]);
        // console.log(data);
    }

    // Запит на отримання коментарів до поста і обробку
    function searchComments(id){
        return fetch(url + 'posts/' + id + '/comments').then(response => {
            return response.json()
        })
    }

    let dataPostComments = (data) => {
        setcommentsList(data);
        // console.log(data);
    }

  return (
      <div className='main'>
            <SearchForm searchPost={searchPost} dataPost={dataPost}/>
          <div>
              {
                  postList.map((item) => {
                      console.log(item);
                      if(item.length < 1){
                          return <p key='1' className='error'>wrong value! try from 1 to 100</p>
                      }else {
                          return <PostItem
                                  searchComments={searchComments}
                                  dataPostComments={dataPostComments}
                                  key={item.id}
                                  item={item}
                                  />
                      }
                  })
              }
          </div>

          <div>
              {
                  commentsList.map((item,i) => {
                          // console.log(item)
                            return <CommentItem
                              commNum={i + 1}
                              key={item.id}
                              item={item}
                          />
                  })
              }
          </div>
      </div>
  );
}

export default App;