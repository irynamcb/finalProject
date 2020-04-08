

export const deleteFriend = friendId => (
    $.ajax({
        url: `/api/friends/${friendId}/`,
        method: 'DELETE'
    })
);