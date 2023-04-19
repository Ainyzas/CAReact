import React, { useEffect, useState } from 'react';
import Article from '../../atoms/Article/Article';
import { fetchNews } from '../../../api-calls/News';
import { StyledButton, StyledButtonDiv, StyledPageDiv } from './NewsPage.styled';

export default function NewsPage({ category }) {
  const [articles, setArticles] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function makePagesArray(amount) {
    let pageArray = [];
    for (let i = 1; i <= amount; i++) {
      pageArray.push(i);
    }
    setPages(pageArray);
  }

  function buttonClickHandler(page) {
    setCurrentPage(page);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchNews(category, currentPage).then((data) => {
        setArticles(data.articles);
        const entries = Math.ceil(data.totalResults / 12);
        makePagesArray(entries);
        setIsLoading(false);
      });
    }, 150);
  }, [category, currentPage]);

  return (
    <div>
      <StyledPageDiv>
        {articles.map((article, index) => {
          return <Article key={index} title={article.title} author={article.author} url={article.url} />;
        })}
      </StyledPageDiv>
      <StyledButtonDiv>
        {pages.map((page) => {
          return (
            <StyledButton disabled={isLoading} onClick={() => buttonClickHandler(page)} key={page}>
              {page}
            </StyledButton>
          );
        })}
      </StyledButtonDiv>
    </div>
  );
}
