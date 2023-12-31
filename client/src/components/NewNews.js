import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';

export default function NewNews() {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      author: '',
      image:'',
    },
    validationSchema: Yup.object({
      title: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
      content: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      image: Yup.string().url('Must be valid url').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="row mt-4">
      <div className="col-lg-6 mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className='form-label' htmlFor="title">Title</label>
          <input className='form-control' id="title" type="text" {...formik.getFieldProps('title')} />
          {formik.touched.title && formik.errors.title ? 
          (
            <Alert className="mt-3" variant={`danger`}>
              {formik.errors.title}
            </Alert>
        ) : null}
        </div>

        <div className="mb-3">
          <label className='form-label' htmlFor="content">Content</label>
          <input className='form-control' id="content" type="text" {...formik.getFieldProps('content')} />
          {formik.touched.content && formik.errors.content ? ( <Alert className="mt-3" variant={`danger`}>
              {formik.errors.content}
            </Alert>) : null}
        </div>

        <div className="mb-3">
          <label className='form-label' htmlFor="author">Author</label>
          <input className='form-control' id="author" type="text" {...formik.getFieldProps('author')} />
          {formik.touched.author && formik.errors.author ? (
             <Alert className="mt-3" variant={`danger`}>
             {formik.errors.author}
           </Alert>
            ) : null}
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="image">Image</label>
          <input className='form-control' id="image" type="text" {...formik.getFieldProps('image')} />
          {formik.touched.image && formik.errors.image ? (
             <Alert className="mt-3" variant={`danger`}>
             {formik.errors.image}
           </Alert>
            ) : null}
        </div>

        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};
