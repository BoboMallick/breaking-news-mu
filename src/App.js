import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a88f826d203d4558831f453c4c3fd824'
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
     <h2>Headlines: {articles.length}</h2>
    {
      articles.map(article => <News article={article}></News>)
    }
    </div>
  );
}

export default App;
