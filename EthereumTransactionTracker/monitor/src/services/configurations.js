const baseUrl = 'http://localhost:3000/configurations'

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
};

export const getLastConfig = async () => {
    try {
        let res = await fetch(`${baseUrl}/getLast`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}
