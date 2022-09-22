export interface Profile {
    customerId: string;
    driverId: string;
    name: string;
    contactNo: string;
    emailAddress: string;
}

export class ProfileModel implements Profile {
    customerId: string;
    driverId: string;
    name: string;
    contactNo: string;
    emailAddress: string;

    constructor() {
        this.customerId = '';
        this.driverId = '';
        this.name = '';
        this.contactNo = '';
        this.emailAddress = '';
    }
}
