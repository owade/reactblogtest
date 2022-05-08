import React, { useState, useEffect } from 'react';
import {Route,Routes,useNavigate,Link} from 'react-router-dom';
import { format } from 'date-fns';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import Layout from './Layout';



function App() {
  const [search,setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
   useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

    const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    setPosts(posts.map(post => post.id === id ? { ...updatedPost } : post));
    setEditTitle('');
    setEditBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }
  
  return (
     <div className="App">
      
       
        <Routes>
         <Route element={<Layout search={search} setSearch={setSearch} />} >
           <Route index element={<Home posts={searchResults} />} />
           <Route path="/home" element={<Home posts={searchResults} />} />
           <Route path="/post">
             <Route  index element={<NewPost  
                                      handleSubmit={handleSubmit}
                                      postTitle={postTitle}
                                      setPostTitle={setPostTitle}
                                      postBody={postBody}
                                      setPostBody={setPostBody} />} />
             <Route  path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
           </Route>
           <Route  path="/EditPost/:id" element={<EditPost 
                                                    posts={posts}
                                                    handleEdit={handleEdit}
                                                    editTitle={editTitle}
                                                    setEditTitle={setEditTitle}
                                                    editBody={editBody}
                                                    setEditBody={setEditBody} 
                                                     />} />
           <Route  path="about" element={<About/>} />
           <Route path="*" element={<Missing/>} />   
         </Route>
        </Routes>
      
      
    </div>
  );
}

export default App;