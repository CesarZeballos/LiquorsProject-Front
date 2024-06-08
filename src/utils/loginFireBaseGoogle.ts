import axios from "axios";

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
        console.log(response);
        //USER DATA LOGIN/REGISTER GOOGLE
        console.log("respuesta back login google", response);
        console.log("respuesta firebase a login google", result);
        const userDataLogin: any = {
            name: result.user.displayName,
            email: result.user.email,
            id: response.data.id,
            rol: response.data.rol,
            token: response.data.token
        }
        console.log(userDataLogin);
        
        const newData = JSON.stringify(userDataLogin)
        localStorage.setItem("userDataLogin", newData)
        setErrorGoogle(null)
        setIsSuccessGoogle(true);
        router.push("/")
    } catch (error: any) {
        console.log("error firebase google login", error);
        setErrorGoogle(error.response.data.message);
        setIsSuccessGoogle(false);
    } finally {
        setIsLoadingGoogle(false);
    }
  };
  
export default loginUserFireBaseGoogle;