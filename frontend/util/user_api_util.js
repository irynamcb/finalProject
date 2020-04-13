export const fetchUser = userId => (    
    $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    })
)

export const updateUser = user => {
    let formData = new FormData();
    for (let key in user) {
    formData.append(`user[${key}]`, user[key]);
    }
    return (
    $.ajax({
        url: `api/users/${user.id}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
    })
    )
}
