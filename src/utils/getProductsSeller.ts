export const fetchProductsSeller = async (userId: string, token: string) => {
    try {
        console.log("userid y token", userId, token)
        const response = await fetch(`https://liquors-project.onrender.com/users/${userId}/products`, {
            headers: {
              authorization: `bearer ${token}`,}
          }
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
} 