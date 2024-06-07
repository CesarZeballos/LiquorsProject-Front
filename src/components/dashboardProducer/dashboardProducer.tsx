'use client'
import { ProductForm } from "@/components/productForm/productForm";
import { readUsers } from "@/store/reducers/usersSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const DashboardProducer = () => {
    const user = useSelector((state: any) => state)
    const [ dataUser, setDataUser ] = useState({
      name: user.name,
      email: user.email
    })
  
    // en el local storage. id, name y email.
    // userDataLogin
  
  
  
  
  
  
  
    const [searchBar, setSearchBar] = useState("products")
  
    const HandlerSearchBar = (event: any) => {
      setSearchBar(event.target.value)
    }
  
    return <div className="mx-large mt-small">
      <h1 className="">Hola {dataUser.name}!</h1>
      <div className="flex flex-row gap-6 mt-6">
        <div className="flex flex-col pt-5 bg-greyVivino gap-6 p-6 rounded">
                <button className="buttonSecondary hover:cursor-pointer" value="products" onClick={HandlerSearchBar}>Productos publicados</button>
                <button className="buttonPrimary hover:cursor-pointer" value="addProduct" onClick={HandlerSearchBar}>Agregar un producto</button>
        </div>
          {searchBar === "products" && (
        <p>listado de productos</p>
          )}
          {searchBar === "addProduct" && (
        <ProductForm />
          )}
    </div>
  
    </div>;
  };