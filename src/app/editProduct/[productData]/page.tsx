'use client'
import { ProductFormEdit } from "@/components/productFromEdit/productFormEdit";
import { Product } from "@/interfaces/interfaz";
import { useEffect, useState } from "react";

const EditProductData = ({ params }: { params: { productId: string } }) => {
    const [detailProduct, setDetailProduct] = useState<Partial<Product>>({});
  
    useEffect(() => {
      const detailProductStorage: any = localStorage.getItem("detailProduct");
      detailProductStorage && setDetailProduct(JSON.parse(detailProductStorage));
    }, []);

    return (
        <div>
            <ProductFormEdit product={detailProduct as Product} />
        </div>)
}

export default EditProductData;