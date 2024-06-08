"use client";
import ProductFilterCard from "@/components/filtroProducts/filtroProducts";
import MapProductCard from "@/components/mapProductCard/mapProductCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductsFiltered } from "@/utils/getProductsFiltered";
import { useDispatch } from "react-redux";

const Product: React.FC = (): React.ReactNode => {

  const dispatch = useDispatch();

  //aqui guardaria los valores de los filtros
  const [filters, setFilters] = useState<any>({});
  console.log(filters);
  
  //valors de barra de busqueda
  const [search, setSearch] = useState({item: ''});

  //ROL DE USUARIO PREMIUN O CONVENCIONAL
  const [hasRol, setHasRol] = useState<number>(); // Cambia esto según tu lógica de autenticación
  //ESTADO PARA OCULTAR O MOSTRAR FILTRO.
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);

  useEffect(() => {
    const newData: any = localStorage.getItem("userDataLogin")
    const rol = JSON.parse(newData)
    setHasRol(rol)
  }, [])

  const router = useRouter()

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    fetchProductsFiltered(filters, dispatch)
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  }

  const itemSubmit = () => {
    const item = JSON.stringify(search)
    localStorage.setItem("itemCategory", item)
    setTimeout(() => {
      router.push("/product/productFilteredBar")
    },300)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Previene el comportamiento por defecto del Enter
      itemSubmit(); // Llama a la función itemSubmit
    }
  };

  //HANDLER PARA BOTON QUE OCULTA/MUESTRA
  const toggleFilterVisibility = () => {
    if (hasRol === 4) {
      setIsFilterVisible(!isFilterVisible);
    } else {
      alert("Debe suscribirse a cuenta premium");
    }
  };

  return (
    <div>
      
      {/* SEARCHBAR */}
      <section className="flex justify-center bg-greyVivino ">
        <input placeholder="buscar..." 
          className=" p-2 mb-2 pb-2  rounded-[25px] border border-gray-300 mt-2"
          type="text" 
          value={search.item} 
          name="item" 
          onKeyDown={handleKeyDown} 
          onChange={inputHandler}/>
      </section>

      {/*BOTON FILTRO, FILTRO Y TARJETA PRODUCTOS */}
      <section className="flex pt-10 pb-10 bg-greyVivino  items-start">
           {/*BOTON PARA DESPLEGAR/OCULTAR FILTRO */}
          <button className="mb-4 px-4 py-2 bg-wine text-white rounded-lg" onClick={toggleFilterVisibility}>
            {isFilterVisible ? "Ocultar Filtro" : "Mostrar Filtro"}
          </button>
    
          {/*TARJETAS CON FILTROS */}
          {isFilterVisible && <ProductFilterCard onFilterChange={handleFilterChange} />}
      
          {/*TARJETAS CON PRODUCTOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MapProductCard />
          </div>
      </section>

    </div>
  );
};

export default Product;
