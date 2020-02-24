import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({posts}) => (
  <ul>
    {
      posts.data && posts.data.map((post, index) =>
        <li key={index}>{post.employee_name}</li>
    )
    }
  </ul>
);

PostList.propTypes = {
  status: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      employee_name: PropTypes.string.isRequired,
      employee_salary: PropTypes.string.isRequired,
      employee_age: PropTypes.string.isRequired,
      profile_image: PropTypes.string.isRequired,
    })
  )
};

export default PostList;