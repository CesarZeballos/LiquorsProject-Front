'use client'
import { DashboardSelector } from "@/components/dashboardSelector/dashboardSelector";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile: React.FC = () => {

  const [token] = useState(localStorage.getItem("loginToken"))
  const router = useRouter()

  useEffect(() => {
    if (!token) {
      router.push("/")
    }
  }, [token])

  return (
    <>
      {token && (
        <DashboardSelector />
      )}
    </>
  )
};

export default Profile; 