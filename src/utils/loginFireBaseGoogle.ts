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
        //____________________________________POST REGISTER/LOGIN GOOGLE A BACK END______________________________________
        const registerObjetGoogle = {
            name: result.user.displayName,
            email: result.user.email,
            firebaseUid: result.user.uid,
            provider: result.user.providerData[0].providerId, 
            //provider: backend valida esta propiedad, si ya existe una cuenta que tenga esta propiedad y el valor de dicha propiedad sea "google.com", 
            //directamente evita el registro y me manda el token de login.
        }
        console.log(registerObjetGoogle);
        const response = await axios.post("https://liquors-project.onrender.com/users/signup", registerObjetGoogle)
        //TOKEN DEVUELTO POR BACKEND, CARGO AL LOCALSTORAGE:  ese token me da permisos a la ruta de usuarios
        const registerTokenBackend = JSON.stringify(response.data.token);
        localStorage.setItem("loginOrRegisterBackendToken", registerTokenBackend)
        const userDataLogin: any = {
            name: response.data.name, 
            email: result.user.email,
            id: response.data.id,
            rol: response.data.rol
          }
        const newData = JSON.stringify(userDataLogin)
        localStorage.setItem("userDataLogin", newData)
        /*____________________________________POST LOGIN GOOGLE A BACK END______________________________________
        const loginObjetGoogleDos = {
            email: result.user.email,
            firebaseUid12345678: result.user.uid
        }
        const response2 = await axios.post("https://liquors-project.onrender.com/users/signin", loginObjetGoogleDos)
        //TOKEN DEVUELTO POR BACKEND, CARGO AL LOCALSTORAGE:  ese token me da permisos a la ruta de usuarios
        const registerTokenBackendGo = JSON.stringify(response2.data.token);
        localStorage.setItem("loginOrRegisterBackendToken", registerTokenBackendGo)
        const userDataLogin: any = {
            name: response2.data.name, 
            email: result.user.email,
            id: response2.data.id
        }
        console.log(response2);
        const newData = JSON.stringify(userDataLogin)
        localStorage.setItem("userDataLogin", newData)*/
        setErrorGoogle(null)
        setIsSuccessGoogle(true);
        router.push("/")
    } catch (error: any) {
        console.log(error);
        setErrorGoogle(error.response.data.message);
        setIsSuccessGoogle(false);
    } finally {
        setIsLoadingGoogle(false);
    }
  };
  
export default loginUserFireBaseGoogle;