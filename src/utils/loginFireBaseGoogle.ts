const loginUserFireBaseGoogle = async (auth: any, provider: any, router: any, setErrorGoogle:any, setIsLoadingGoogle: any, setIsSuccessGoogle: any, signInWithPopup: any) => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        const user = JSON.stringify(result.user.accessToken);
        localStorage.setItem("loginToken", user)
        setErrorGoogle(null)
        setIsSuccessGoogle(true);
        setTimeout(() => {
            router.push("/")
        })
    } catch (error) {
        setErrorGoogle(error);
        setIsSuccessGoogle(false);
    } finally {
        setIsLoadingGoogle(false);
    }
  };
  
export default loginUserFireBaseGoogle;