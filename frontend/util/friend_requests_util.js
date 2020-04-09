export const sendRequest = friendId => (
    $.ajax({
        url: `/api/friend_requests`,
        method: 'POST',
        data: {friendId: friendId} 
    })
);


export const deleteRequest = requestId => (
    $.ajax({
        url: `/api/friend_requests/${requestId}`,
        method: 'DELETE'
    })
);