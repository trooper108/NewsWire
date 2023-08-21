import React from 'react'
import Masonry from 'react-masonry-css'
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'

export default function Home() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <React.Fragment>
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          >
            <div>
              <img className="img-fluid my-2" src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <div>
                    <span>Admin</span>
              </div>
              <div className="content">
                <div className="title">Title</div>
                <div className="excerpt">Body of the news</div>
                <Button variant="primary">Read More</Button>
              </div>
            </div>
            <div>
              <img className="img-fluid my-2" src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <div>
                    <span>Admin</span>
              </div>
              <div className="content">
                <div className="title">Title</div>
                <div className="excerpt">Body of the news</div>
                <Button variant="primary">Read More</Button>
              </div>
            </div>
            <div>
              <img className="img-fluid my-2" src="https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <div>
                    <span>Admin</span>
              </div>
              <div className="content">
                <div className="title">Title</div>
                <div className="excerpt">Body of the news</div>
                <LinkContainer to={'/news/id'}>
                  <Button variant="primary">Read More</Button>
                </LinkContainer>
              </div>
            </div>
      </Masonry>
    </React.Fragment>
  )
}
