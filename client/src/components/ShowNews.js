import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
export default function ShowNew() {
  return (
    <div>
      <h1>Title</h1>
      <div style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }} className='img'></div>
      <div className="author">
        <span>Created by : Admin</span>
        <div>Created at : 5:48 AM</div>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deserunt temporibus qui quo nulla distinctio praesentium, illum neque ratione nesciunt natus voluptate dolorum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam deleniti consequuntur earum consectetur aut, sequi tempora maxime obcaecati ducimus doloribus vero in suscipit? Quis atque perferendis eius libero ven
        iam sed, quasi officiis repellat reiciendis explicabo excepturi quibusdam expedita voluptate
        m, soluta, quo accusamus deserunt repudiandae ex officia ratione. A, possimus quas ea rem qui
        s soluta. Vel doloremque molestias hic ex possimus ipsam veniam aut, quisquam nam? Aliquid ad
        ipisci nisi perspiciatis nulla at sequi modi et recusandae expedita cupiditate similique voluptatibus quae numquam, excepturi amet dicta asperiores ex facere corporis pariatur consequuntur! Eaque similique possimus, rem veniam eligendi sapiente necessitatibus nisi neque, sit, fugit corporis et autem. Voluptate reiciendis nostrum molestiae est blanditiis! Ducimus officia sapiente animi odit pariatur et ab,
         nam laborum, cupiditate molestiae ad nisi provident quod repellendus harum itaque.
      </div>
      <LinkContainer to={`/news/:id/edit`}>
        <button className="btn btn-primary m-1">Edit</button>
      </LinkContainer>
      <button className="btn btn-secondary m-2">Delete</button>
    </div>
  )
}
