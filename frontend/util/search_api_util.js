export const search = (key) => (
    $.ajax({
        url: `api/search`,
        method: 'GET',
        data: {
            search_key: key
        }
    })
)