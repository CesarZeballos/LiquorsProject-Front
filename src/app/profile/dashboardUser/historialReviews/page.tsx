'use client'
import { MapUserHistorialReviews } from "@/components/dashboardJuan/historial de reviews/mapHistoryReview";
import { MenuDashboard } from "@/components/dashboardJuan/menuDashboard/menuDashboard";
import React,{ useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const HistorialReviews: React.FC = (): React.ReactNode => {

    const [token] = useState<string | null>(localStorage.getItem("loginToken") ?? null);
    const [role, setRole] = useState<any>({rol: ""})
    console.log("rol de dashboardUser",role);
    
  
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
                <div className="bg-greyMLfilter flex flex-row pt-1 mb-1 h-screen">
                    <MenuDashboard/>
                    <div className="overflow-y-auto">
                        <MapUserHistorialReviews />
                    </div>
                </div>
                </>
            )}
        </>
  )
};

export default HistorialReviews