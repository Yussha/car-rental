import { useMemo } from "react";


// helper function
const getUniqueCategBykey = (array, key) => {
    return array.filter((value, index, self) => {
        const keyValues = self.map((item) => item[key]);
        return keyValues.indexOf(value[key]) === index;
    })
}

const useUniqueProperties = (cars) => {
    // we use the useMemo Hook in order to provide aa better performance on my components
    const uniqueCategoryBody = useMemo(() => getUniqueCategBykey(cars, 'body'), [cars]);
    const uniqueFuelType = useMemo(() => getUniqueCategBykey(cars, 'fuelType'), [cars]);
    const uniqueSeat = useMemo(() => getUniqueCategBykey(cars, 'seat'), [cars]);
    const uniqueTransmission = useMemo(() => getUniqueCategBykey(cars, 'transmission', [cars]));

    return { uniqueCategoryBody, uniqueFuelType, uniqueSeat, uniqueTransmission };
}

export default useUniqueProperties