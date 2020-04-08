export const acceptFriend = friend => (
    $.ajax({
        url: `/api/friends/`,
        method: 'POST',
        data: {friend}
    })
);


export const deleteFriend = friendId => (
    $.ajax({
        url: `/api/friends/${friendId}/`,
        method: 'DELETE'
    })
);