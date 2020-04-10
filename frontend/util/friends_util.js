export const acceptFriend = friendId => (
    $.ajax({
        url: `/api/friends/`,
        method: 'POST',
        data: {id: friendId}
    })
);


export const deleteFriend = friendId => (
    $.ajax({
        url: `/api/friends/${friendId}/`,
        method: 'DELETE'
    })
);