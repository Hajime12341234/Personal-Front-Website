// blog.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style-components/Blog.css';


const Blog = () => {
    useEffect(() => {
        const orangeBalls = document.querySelectorAll('.circular-ball.orange-ball');
        const whiteBalls = document.querySelectorAll('.circular-ball.white-ball');
        const circle = document.querySelector('.circle-overlay');

        orangeBalls.forEach((ball, index) => {
            let position = index * (360 / orangeBalls.length);
            let direction = 1;

            function moveOrangeBall() {
                position += direction;

                const angleInRadians = (position * Math.PI) / 180;
                const distance = circle.offsetWidth / 2 + 30; // 30 pixels away from the circle 
                const bounce = Math.abs(Math.sin(angleInRadians));
                const x = Math.cos(angleInRadians) * (distance + bounce * 60); 
                const y = Math.sin(angleInRadians) * (distance + bounce * 60);

                ball.style.left = `calc(50% + ${x}px)`;
                ball.style.top = `calc(50% + ${y}px)`;

                requestAnimationFrame(moveOrangeBall);
            }

            moveOrangeBall();
        });

        whiteBalls.forEach((ball, index) => {
            let position = index * (360 / whiteBalls.length);
            let direction = 1;

            function moveWhiteBall() {
                position += direction;

                const angleInRadians = (position * Math.PI) / 180;
                const distance = circle.offsetWidth / 2 - 30; // 30 pixels inside the circle 
                const bounce = Math.abs(Math.sin(angleInRadians));
                const x = Math.cos(angleInRadians) * (distance - bounce * 60); 
                const y = Math.sin(angleInRadians) * (distance - bounce * 60);

                ball.style.left = `calc(50% + ${x}px)`;
                ball.style.top = `calc(50% + ${y}px)`;

                requestAnimationFrame(moveWhiteBall);
            }

            moveWhiteBall();
        });
    }, []);

  const handleBlogClick = (blogId) => {
      // Handle blog item click, open corresponding blog content, etc.
      console.log(`Clicked on blog item ${blogId}`);
  };

  return (
      <div className="blog-container">
          <div className="background-image-blog">
              <div className="circle-overlay"></div>
              <div className="circular-balls-container">
                  {/* 8 orange balls */}
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  <div className="circular-ball orange-ball"></div>
                  {/* 8 white balls */}
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
                  <div className="circular-ball white-ball"></div>
              </div>
              <h2 className="blog-header">Blog</h2>
              <p className="blog-paragraph">The collection of random thoughts, some of which are rational.</p>
          </div>
          <div className="blog-content-container">
          <Link to="/blog/myFirstBlog" className="blog-content" onClick={() => handleBlogClick(1)}>
          <div className="blog-metadata">
            <span className="date-published">JANUARY 5, 2024 | 4 MINUTE READ</span>
            <span className="blog-title">The Blog Title 1</span>
            <span className="blog-excerpt">
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more.
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more.
              {/* ... Repeat for the other excerpts ... */}
            </span>
          </div>
        </Link>
        <Link to="/blog/mySecondBlog" className="blog-content" onClick={() => handleBlogClick(2)}>
          <div className="blog-metadata">
            <span className="date-published">JANUARY 10, 2024 | 3 MINUTE READ</span>
            <span className="blog-title">The Blog Title 2</span>
            <span className="blog-excerpt">
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              The main text is displayed here... Click to read more. 
              {/* ... Repeat for the other excerpts ... */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Blog;