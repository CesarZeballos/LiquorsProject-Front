
'use client'
import { validateProductForm } from "@/utils/validateProduct";
import { useEffect, useState } from "react";
import { IProductForm, IProductFormErrorProps } from "./types";
import { usePathname } from "next/navigation";

const categories = [
    "vino",
    "ron",
    "whisky",
    "spirit"
]

const countries = ["Argentina", "Brazil", "Canada", "France", "Germany", "Italy", "Japan", "Mexico", "Spain", "United Kingdom", "United States"];


export const ProductForm = () => {
    const pathname = usePathname();
    const [dataUser, setDataUser] = useState({
        id: "",
        name: "cesar",
        email: ""
    })
    const [dataProduct, setDataProduct] = useState<IProductForm>({
        name: "",
        description: "",
        country: "",
        brand: dataUser.name,
        abv: "",
        imgUrl: "",
        size: "",
        category: "",
    })
    const [errorProduct, setErrorProduct] = useState<IProductFormErrorProps>({
        name: "",
        description: "",
        country: "",
        abv: "",
        imgUrl: "",
        size: "",
        category: ""
    })

    useEffect(() => {
        const storedData = localStorage.getItem("dataProduct");
        if (storedData) {
            setDataProduct(JSON.parse(storedData));
        }
    }, []);

    const putProduct = async (product: any) => {
        try {
            // await logica del put
        } catch (error) {
            console.log("error al agregar el producto", error);
            throw error;
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setDataProduct(prevDataProduct => {
            const updatedDataProduct = { ...prevDataProduct, [name]: value };
            return updatedDataProduct;
        })
    }

    useEffect(() => {
        localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
    }, [dataProduct]);

    const handleCategoryChange = (event: any) => {
        const { value } = event.target;
        setDataProduct({
            ...dataProduct,
            category: value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(dataProduct)

        const errorInput = validateProductForm(dataProduct);
        setErrorProduct(errorInput);
        if (Object.keys(errorInput).length === 0) {
            alert(`el producto ${dataProduct.name} ha sido agregado con exito`);

            putProduct(dataProduct);
        } else {
            alert ("hubo un error al agregar el producto");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>completa los siguientes campos para agregar tu producto:</h1>
            <div>
                <label>Nombre del producto: </label>
                <input
                    type="text"
                    name="name"
                    value={dataProduct.name}
                    onChange={handleChange}
                    className="input"
                    required
                    />
                {errorProduct.name && <p>{errorProduct.name}</p>}
            </div>
            <div>
                <label>Descripción: </label>
                <input
                    type="text"
                    name="description"
                    value={dataProduct.description}
                    onChange={handleChange}
                    className="input"
                    required
                    />
                {errorProduct.description && <p>{errorProduct.description}</p>}
            </div>
            <div>
                <label>URL de la imagen: </label>
                <input
                    type="text"
                    name="imgUrl"
                    value={dataProduct.imgUrl}
                    onChange={handleChange}
                    className="input"
                    required
                    />
                {errorProduct.imgUrl && <p>{errorProduct.imgUrl}</p>}
            </div>
            <div>
                <label>Categoría:</label>
                {categories.map(category => (
                    <div key={category}>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={dataProduct.category === category}
                                onChange={handleCategoryChange}
                            />
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </label>
                    </div>
                ))}
                {errorProduct.category && <p>{errorProduct.category}</p>}
            </div>
            <div>
                <label>ml: </label>
                <input
                    type="number"
                    name="size"
                    value={dataProduct.size}
                    onChange={handleChange}
                    className="input"
                    required
                    />
                {errorProduct.size && <p>{errorProduct.size}</p>}
            </div>
            <div>
                <label>Graduacion alcoholica (en numeros): </label>
                <input
                    type="number"
                    name="abv"
                    value={dataProduct.abv}
                    onChange={handleChange}
                    className="input"
                    required
                    />
                {errorProduct.abv && <p>{errorProduct.abv}</p>}
            </div>
            <div>
      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={dataProduct.country}
        onChange={handleChange}
      >
        <option value="">Selecciona un país</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      {errorProduct.country && <span>{errorProduct.country}</span>}
    </div>
            <button type="submit" className="but">agregar</button>
        </form>
    );
}