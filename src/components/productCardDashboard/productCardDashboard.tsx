import { Product } from "@/interfaces/interfaz";
import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import { putProduct } from "@/utils/putProduct";
import { usePathname } from "next/navigation";

export const ProductCardDashboard: React.FC<{ product: Product }> = ({product}): React.ReactNode => {
    const pathname = usePathname();
    const [token, setToken] = useState("");
    const [productData, setProductData] = useState({
        id: product.id,
        name: product.name,
        description: product.description,
        imgUrl: product.imgUrl,
        category: product.category,
        adv: product.abv,
        brand: product.brand,
        country: product.country,
        size: product.size,
        active: product.active,
        rate: product.rate,
        //recordar de traer el status de la base de datos
    });

    useEffect(() => {
        if( typeof window !== "undefined" && window.localStorage) {
        const storeToken = localStorage.getItem("loginToken");
        setToken(JSON.parse(storeToken!));
        }
    }, [pathname])

    const handleChange = (event: any) => {
        const {name, value} = event.target;

        setProductData({
            ...productData,
            status: !productData.status
            });
            console.log(productData)
            putProduct(productData.id, productData, "token")
            //este productData llora porque no esta bien la interfaz, la tengo que cambiar cuando el back este actualizado. 
    }

    return (
        <div key={product.id} className="flex flex-row justify-between bg-white items-center h-32 w-full border-t-8 hover:cursor-pointer rounded-t-xl border-solid border-wine border-2 rounded-lg p-4 m-4">
            <div className="flex flex-row gap-4">
                <Switch checked={productData.status} onChange={handleChange} defaultChecked color="default" size="small"/>
                {productData.status ? 
                <p className="text-center w-24 text-green-950 rounded-full bg-green-200">{"Activo"}</p> 
                : 
                <p className="text-center w-24 text-red-950 rounded-full bg-red-200">{"Inactivo"}</p>
                }
            </div>
            <div className="flex flex-row justify-start gap-4 items-center">
                <img src={product.imgUrl} alt="imagen bebida" className="my-2 h-24 object-cover rounded-md"/>
                <h2 className="text-center text-lg font-Lora mb-2">{product.name}</h2>
            </div>
            <Link className="buttonSecondary" href={`/editProduct/${product.id}`}>Editar <EditIcon /></Link>
        </div>
    )
}