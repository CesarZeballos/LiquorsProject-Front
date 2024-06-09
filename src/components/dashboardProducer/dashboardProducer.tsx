'use client'
import { ProductForm } from "@/components/productForm/productForm";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductsListSeller } from "../productsListSeller/productsListSeller";

export const DashboardProducer = () => {
    const [searchBar, setSearchBar] = useState("products")
  
    const HandlerSearchBar = (event: any) => {
      setSearchBar(event.target.value)
    }
  
    return <div className="flex flex-row justify-center gap-6 mt-6">
        <div className="flex flex-col pt-5 bg-greyVivino gap-6 p-6 rounded">
                <button className="buttonSecondary hover:cursor-pointer" value="products" onClick={HandlerSearchBar}>Productos publicados</button>
                <button className="buttonPrimary hover:cursor-pointer" value="addProduct" onClick={HandlerSearchBar}>Agregar un producto</button>
        </div>
        {searchBar === "products" && (
        <ProductsListSeller />
        )}
        {searchBar === "addProduct" && (
            <ProductForm />
            )}
    </div>;
  };