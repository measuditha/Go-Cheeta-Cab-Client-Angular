interface Car {
    brand: string;
    model: string;
    registrationNo: string;
    price: number;
    availability: boolean;
    locationId: number;
    driverId: string;
}
// export Car;

class CarModel implements Car {
    brand: string;
    model: string;
    registrationNo: string;
    price: number;
    availability: boolean;
    locationId: number;
    driverId: string;
    constructor() {
        this.brand = '';
        this.model = '';
        this.registrationNo = '';
        this.price = 0;
        this.availability = true;
        this.locationId = 0;
        this.driverId = '';
    }
}
export {Car, CarModel};
