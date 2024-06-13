'use client'
import { ProductForm } from "@/components/productForm/productForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MenuDashboard } from "@/components/dashboardJuan/menuDashboard/menuDashboard";

const ProductFormUser = () => {

    const [token] = useState<string | null>(localStorage.getItem("loginToken") ?? null);
    const [role, setRole] = useState<any>({rol: ""})
    console.log("rol de dashboardProducer", role);
    
    const router = useRouter()
  
    useEffect(() => {
      if (!token) {
        router.push("/");
      } else {
        const dataLogin: any = localStorage.getItem("userDataLogin");
        const dataLoginParsed = JSON.parse(dataLogin);
        setRole(dataLoginParsed.role);
      }
    }, [token])

    return (
        <>
        {token && (
            <>
            <div className="bg-greyVivino flex flex-row pt-1 mb-1">
                <MenuDashboard/>
                <ProductForm/>
            </div>
            </>
        )}
    </>
    )
}

export default ProductFormUser;