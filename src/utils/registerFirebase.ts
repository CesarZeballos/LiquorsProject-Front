import axios from "axios";

const registerUserFirebase = async (formData: any, auth:any, createUserWithEmailAndPassword: any ,setIsSuccess: any, setErrors: any, router: any, errors: any, setIsLoading: any, setToken: any) => {
      try {
            //___________________________________________POST REGISTER A FIREBASE_________________________________________
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            //DATA USUARIO REGISTRADO
            const userFirebase = userCredential.user; //Objeto que contiene información del usuario registrado. (token, mail, etc.)

            //___________________________________________POST REGISTER A BACK END_________________________________________
            /*const dataRegisterBack = {
                  name: formData.name, 
                  email: userFirebase.email, 
                  firebaseUid: userFirebase.uid
            }
            console.log("objeto registro firebase:", dataRegisterBack);
            const response = await axios.post("https://liquors-project.onrender.com/users/signin", dataRegisterBack )
            //TOKEN DEVUELTO POR BACKEND, CARGO AL LOCALSTORAGE:  ese token me da permisos a la ruta de usuarios
            const registerTokenBackend = JSON.stringify(response.token);
            localStorage.setItem("loginOrRegisterBackendToken", registerTokenBackend)*/
            
            setIsSuccess(true);
            setErrors({});
            setTimeout(() => {
                  router.push("/login")
            }, 2000);
      } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error en el registro:', errorCode, errorMessage);
            setErrors({ ...errors, submit: errorMessage }); 
      } finally {
            setIsLoading(false);
      }
};

export default registerUserFirebase;
