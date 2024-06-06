import axios from "axios";
import firebase from "firebase/compat/app";

const loginUserFireBaseGoogle = async (auth: any, provider: any, router: any, setErrorGoogle:any, setIsLoadingGoogle: any, setIsSuccessGoogle: any, signInWithPopup: any) => {
    try {
        //___________________________________________LOGIN GOOGLE A FIREBASE_________________________________________
        const result = await signInWithPopup(auth, provider);
        console.log("data de login google", result.user);
        //LOGIN TOKEN
        const userData = JSON.stringify(result.user.accessToken);
        localStorage.setItem("loginToken", userData)
        //UID 
        const userDataUid = JSON.stringify(result.user.uid);
        localStorage.setItem("uidFirebaseGoogleLogin", userDataUid)

        //____________________________________POST LOGIN/REGISTER GOOGLE A BACK END______________________________________
        const loginObjetGoogle = {
            name: result.user.displayName,
            email: result.user.email,
            firebaseUid: result.user.uid
        }
        console.log(loginObjetGoogle);
        const response = await axios.post("https://liquors-project.onrender.com/users/signin", loginObjetGoogle)
        //TOKEN DEVUELTO POR BACKEND, CARGO AL LOCALSTORAGE:  ese token me da permisos a la ruta de usuarios
        const registerTokenBackend = JSON.stringify(response.data.token);
        localStorage.setItem("loginOrRegisterBackendToken", registerTokenBackend)
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