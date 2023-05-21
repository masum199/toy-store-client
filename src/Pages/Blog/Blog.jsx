/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Blog.css';
import useTitle from '../../Title/Title';
// import useTitle from '../../Title/Title';


const Blog = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
useTitle("blog")
  return (
    <div className="blog-container" data-aos="fade-up">

      <h2 className="blog-heading">Blog</h2>
      <div className="content-container" data-aos="fade-up" data-aos-delay="200">
        <div className="blog-item">
          <h1 className="blog-question">What is an access token and refresh token?</h1>
          <p className="blog-answer">
            An access token is a credential used for authentication and
            authorization, while a refresh token is used to obtain a new access
            token when it expires.
          </p>
        </div>

        <div className="blog-item">
          <h1 className="blog-question">Compare SQL and NoSQL databases.</h1>
          <p className="blog-answer">
            SQL and NoSQL databases differ in their data models and schemas,
            with SQL being relational and structured, while NoSQL is
            non-relational and flexible.
          </p>
        </div>

        <div className="blog-item">
          <h1 className="blog-question">What is Express.js?</h1>
          <p className="blog-answer">
            Express.js is a web application framework for Node.js that simplifies
            building web applications and APIs.
          </p>
        </div>

        <div className="blog-item">
          <h1 className="blog-question">What is NestJS?</h1>
          <p className="blog-answer">
            NestJS is a progressive Node.js framework for building scalable and
            maintainable server-side applications.
          </p>
        </div>

        <div className="blog-item">
          <h1 className="blog-question">What is MongoDB aggregate?</h1>
          <p className="blog-answer">
            MongoDB aggregate is a powerful feature for performing complex
            data aggregation operations, similar to SQL's "GROUP BY" and "JOIN"
            operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;