const loginUserFireBase = async (formData: any, auth:any, signInWithEmailAndPassword: any ,setIsSuccess: any, setError: any, router: any, setIsLoading: any) => {

  try {
        //___________________________________________POST LOGIN A FIREBASE_________________________________________
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("data de login", userCredential.user);
        //TOKEN LOGIN FIREBASE, CARGO AL LOCALSTORAGE
        const user = JSON.stringify(userCredential.user.accessToken);
        localStorage.setItem("loginToken", user)
        //UID LOGIN FIREBASE, CARGO AL LOCALSTORAGE
        const userUid = JSON.stringify(userCredential.user.uid)
        localStorage.setItem("uidLoginFirebase", userUid)

        //__________________________________________POST LOGIN A BACK END_________________________________________
        /*const loginObjet = {
          email: userCredential.user.email,
          firebaseUid: userCredential.user.uid
          }
        console.log(loginObjet);
        const response = await axios.post("https://liquors-project.onrender.com/users/signup", loginObjetGoogle)
        //TOKEN DEVUELTO POR BACKEND, CARGO AL LOCALSTORAGE:  ese token me da permisos a la ruta de usuarios
        const loginTokenBackend = JSON.stringify(response.token);
        localStorage.setItem("loginOrRegisterBackendToken", loginTokenBackend)*/ 
        
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