export const fetchProductsSeller = async (userId: string, token: string) => {
    try {
        const response = await fetch(`https://liquors-project.onrender.com/products/${userId}`,
            {headers: {Authorization: `bearer ${token}`}}
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
} 