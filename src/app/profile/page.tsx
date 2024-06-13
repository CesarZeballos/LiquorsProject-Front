'use client'
import { DashboardSelector } from "@/components/dashboardSelector/dashboardSelector";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MenuDashboard } from "@/components/dashboardJuan/menuDashboard/menuDashboard";
import { AccountInfoCard } from "@/components/dashboardJuan/dashboardUser/dashboardUser";

const Profile: React.FC = (): React.ReactNode => {

  const [token] = useState<string | null>(localStorage.getItem("loginToken") ?? null);
  
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push("/")
    }  
  }, [token])

  return (
    <>
      {token && (
        <>
        <div className="bg-greyVivino flex flex-row pt-1 mb-1">
            <MenuDashboard/>
            {/*AccountInfo aparece para todos los tipos de usuario. */}
            <AccountInfoCard/>
        </div>
        </>
      )}
      
    </>
  )
};

export default Profile; 