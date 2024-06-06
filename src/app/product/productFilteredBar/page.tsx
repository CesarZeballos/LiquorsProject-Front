"use client"
import MapProductCardFiltered from "@/components/mapProductCardFiltered/filtred"
import ProductFilterCard from "@/components/filtroProducts/filtroProducts";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductFiltered = () => {

    const [filters, setFilters] = useState<any>({});

    const router = useRouter()

    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
        //Aquí se maneja la lógica de filtrado de productos usando los filtros actualizados.
      };
    
    return (
       <>
       <div className="bg-greyVivino pb-20">
            <div className="flex flex-col  items-center">
                <button onClick={() => router.push("/product")} className=" p-2 mb-2 pb-2  bg-white rounded-[25px] border border-gray-300 mt-2"> volver a buscar</button>
            </div>
            <div className="flex flex-row pt-10">
                <ProductFilterCard onFilterChange={handleFilterChange}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MapProductCardFiltered/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductFiltered;