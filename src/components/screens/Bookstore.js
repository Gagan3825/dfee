import React, { useEffect, useState } from 'react';
import './Bookstore.css';

const Bookstore = () => {
  const [books, setBooks] = useState([]);
  const [publisherFilter, setPublisherFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1NGIR0tkkFCjId1FH2xabROotoLclIpH'
        );
        const data = await response.json();
        setBooks(data.results.books);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesPublisher = publisherFilter ? book.publisher === publisherFilter : true;
    const matchesAuthor = authorFilter ? book.author === authorFilter : true;
    return matchesPublisher && matchesAuthor;
  });

  return (
    <div className="bookstore-container">
      <h1 className="bookstore-heading">Bookstore</h1>
      <div className="filters">
        <label className="filter-label">
          Filter by Publisher:
          <input
            type="text"
            value={publisherFilter}
            onChange={(e) => setPublisherFilter(e.target.value)}
            className="filter-input"
          />
          <i class="fas fa-search"></i>
        </label>
        <label className="filter-label">
          Filter by Author:
          <input
            type="text"
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            className="filter-input"
          />
          <i class="fas fa-search"></i>

        </label>
      </div>
      <div className="container">
        {filteredBooks.map((book) => (
          <div key={book.primary_isbn10} className="card">
            <h3 className="card-title">{book.title}</h3>
            <br/>
            <img src={book.book_image} alt={book.title} className="card-image" loading="lazy" height="500px"  width="500px"/>
            <br/>
            <p className="card-info">Author: {book.author}</p>
            <p className="card-info">Publisher: {book.publisher}</p>
            <p className="card-info">Rank: {book.rank}</p>
            <p className="card-info">Weeks on List: {book.weeks_on_list}</p>
            <a href={book.buy_links[0].url} target="_blank" rel="noopener noreferrer" className="card-link">
              Buy
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookstore;
