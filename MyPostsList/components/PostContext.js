import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

const PostContext = createContext();

const initialPosts = [
    { id: uuidv4().toString(), txt: 'post 1', img: null },
    { id: uuidv4().toString(), txt: 'post 2', img: null },
    { id: uuidv4().toString(), txt: 'img 1', img: null },
  ];

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
