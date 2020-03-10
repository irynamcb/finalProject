
export const createPost = post => (
  $.ajax({
    url: `/api/posts/`,
    method: 'POST',
    data: { post }
  })
);


export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}/`,
    method: 'DELETE'
  })
);