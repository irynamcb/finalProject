export const search = () => (
    $.ajax({
        url: `api/search`,
        method: 'GET'
    })
)