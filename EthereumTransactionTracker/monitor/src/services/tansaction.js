const baseUrl = 'http://localhost:3000/transactions'

export const insert = async (data) => {
    try {
        let res = await fetch(`${baseUrl}/insert`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}
