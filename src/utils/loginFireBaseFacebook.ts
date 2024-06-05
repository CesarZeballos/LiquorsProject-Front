const loginUserFireBaseFacebook = async (auth: any, provider: any, router: any, setErrorFacebook:any, setIsLoadingFacebook: any, setIsSuccessFacebook: any, signInWithPopup: any) => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = JSON.stringify(result.user.accessToken);
        localStorage.setItem("loginToken", user)
        setErrorFacebook(null)
        setIsSuccessFacebook(true);
        setTimeout(() => {
            router.push("/")
        })
    } catch (error) {
        setErrorFacebook(error);
        setIsSuccessFacebook(false);
    } finally {
        setIsLoadingFacebook(false);
    }
  };
  
export default loginUserFireBaseFacebook;