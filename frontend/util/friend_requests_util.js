export const sendRequest = request => (
    $.ajax({
        url: `/api/friend_requests`,
        method: 'POST',
        data: { request }
    })
);


export const deleteRequest = requestId => (
    $.ajax({
        url: `/api/friend_requests/${requestId}`,
        method: 'DELETE'
    })
);