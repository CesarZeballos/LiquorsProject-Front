import React from "react";
import { IReview } from "@/interfaces/interfaz";
import { Rating } from '@mui/material';

export const CardHistoryReview: React.FC<{ reviewData: IReview}> = ({reviewData}): React.ReactNode => {

    const hardcodedRate = 3
    
    return (
        <>
            <div className="flex flex-col py-0 pr-96 h-1/5 w-full  font-plus-jakarta-sans items-start p-4 border-r-8 border-wine my-4 bg-white rounded-lg shadow-lg ">
                    <p className="text-gray-700 pt-2  font-bold">Producto</p>
                    <p className="text-gray-700  mb-2"></p>
                    <div className="flex flex-row ">
                        <p className="text-gray-700 pr-4 justify-between font-bold">Rate </p>
                        <Rating
                            name="read-only"
                            value={hardcodedRate}
                            readOnly
                            className="flex justify-end"
                        />
                    </div>
                    <p className="text-gray-700 pt-2  font-bold">Comentario</p>
                    <p className="text-gray-700   mb-2"></p>
            </div>
        </>
    )
}