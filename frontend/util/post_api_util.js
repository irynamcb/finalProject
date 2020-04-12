
export const createPost = post => (
  $.ajax({
    url: `/api/posts/`,
    method: 'POST',
    data: post ,
    contentType: false,
    processData: false
  })
);

export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}/`,
    method: 'DELETE'
  })
);

export const fetchPost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'GET'
  })
);
