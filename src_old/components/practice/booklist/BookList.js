//
//

import React from 'react';

import '../../../styles/practice/booklist/BookList.css';

const books = [
  {
    id: 1,
    img:
      'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'by Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71dRuYkNZOL._AC_UY218_.jpg',
    title: 'How to be a Bozo',
    author: 'by BozoBeak',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img
        style={{
          height: 200,
          objectFit: 'contain',
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}
        src={img}
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
