import axios from "axios";

const loginUserFireBaseGoogle = async (auth: any, provider: any, router: any, setErrorGoogle:any, setIsLoadingGoogle: any, setIsSuccessGoogle: any, signInWithPopup: any) => {
    try {
        const result = await signInWithPopup(auth, provider);
        //LOGIN TOKEN
        const userData = JSON.stringify(result.user.accessToken);
        localStorage.setItem("loginToken", userData)
        //UID 
        const userDataUid = JSON.stringify(result.user.uid);
        localStorage.setItem("uidFirebaseGoogleLogin", userDataUid)

        setErrorGoogle(null)
        setIsSuccessGoogle(true);

        //___POST A BACK END________
        //const response = await axios.post("https://liquors-project.onrender.com/users", userData )
        // envio al backend UID y EMAIL que devuelve firebase.
        //devuelve token el back, ese token me da permisos a la ruta de usuarios. con el token q da el back accedes a funciones de usuario.
        //a la hora logear: solo le mando el uid al back.

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