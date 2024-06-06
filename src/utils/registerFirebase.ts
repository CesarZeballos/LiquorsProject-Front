import axios from "axios";

const registerUserFirebase = async (formData: any, auth:any, createUserWithEmailAndPassword: any ,setIsSuccess: any, setErrors: any, router: any, errors: any, setIsLoading: any, setToken: any) => {
      try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            //DATA USUARIO REGISTRADO
            const user = userCredential.user; //Objeto que contiene información del usuario registrado. (token, mail, etc.)
            console.log('lo que devuelve firebase:', user);
            
            setIsSuccess(true);
            setErrors({});

            //___POST A BACK END________
            //const response = await axios.post("https://liquors-project.onrender.com/users", user )
            // envio al backend UID, EMAIL, PASSWORD que devuelve firebase.
            //devuelve token el back, ese token me da permisos a la ruta de usuarios. con el token q da el back accedes a funciones de usuario.

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
