const loginUserFireBase = async (formData: any, auth:any, signInWithEmailAndPassword: any ,setIsSuccess: any, setError: any, router: any, setIsLoading: any) => {

  try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        //TOKEN LOGIN FIREBASE
        const user = JSON.stringify(userCredential.user.accessToken);
        localStorage.setItem("loginToken", user)
        //UID LOGIN FIREBASE
        const userUid = JSON.stringify(userCredential.user.uid)
        localStorage.setItem("uidLoginFirebase", userUid)
        
        setIsSuccess(true);
        setError(null)
        setTimeout(() => {
          router.push("/")
        }, 2000);
  } catch (error: any) {
        const errorMessage = error.message;
        console.error('Error en el inicio de sesión:', errorMessage);
        setError(errorMessage);
        setIsSuccess(false);
  } finally {
    setIsLoading(false);
  }
};

export default loginUserFireBase;