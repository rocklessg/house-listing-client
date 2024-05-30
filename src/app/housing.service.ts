import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  baseUrl = 'https://th.bing.com/th/id/OIP'

  constructor() { }

  //  housingLocationList: HousingLocation[] = [
    // {
    //   id: 0,
    //   name: 'Acme Fresh Start Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: `https://th.bing.com/th/id/OIP.Xu36yiWVP7lewiAeDaXW8wHaE9?rs=1&pid=ImgDetMain`,
    //   availableUnits: 4,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 1,
    //   name: 'A113 Transitional Housing',
    //   city: 'Santa Monica',
    //   state: 'CA',
    //   photo: `https://th.bing.com/th/id/OIP.k_n5iEdmFqx1eTRiY3CSywHaFj?w=198&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 0,
    //   wifi: false,
    //   laundry: true,
    // },
    // {
    //   id: 2,
    //   name: 'Warm Beds Housing Support',
    //   city: 'Juneau',
    //   state: 'AK',
    //   photo: `https://th.bing.com/th/id/OIP.S_i3YzDAZ1h7LBDpU00yUQHaFj?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 1,
    //   wifi: false,
    //   laundry: false,
    // },
    // {
    //   id: 3,
    //   name: 'Homesteady Housing',
    //   city: 'Chicago',
    //   state: 'IL',
    //   photo: `https://th.bing.com/th/id/OIP.vD6vyGKQjfMOTkpnKyZhowAAAA?w=260&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false,
    // },
    // {
    //   id: 4,
    //   name: 'Happy Homes Group',
    //   city: 'Gary',
    //   state: 'IN',
    //   photo: `https://th.bing.com/th/id/OIP.qvRDVH3BsJPB3hXBvqhIgQHaF2?w=235&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 1,
    //   wifi: true,
    //   laundry: false,
    // },
    // {
    //   id: 5,
    //   name: 'Hopeful Apartment Group',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `https://th.bing.com/th/id/OIP.VoF3-ljj0k1I7o6e-UefJQHaEO?w=361&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 6,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `https://th.bing.com/th/id/OIP.rDbNFLvVSf0PH45v_M2RRwHaEt?w=255&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 5,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 7,
    //   name: 'Hopeful Housing Solutions',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `https://th.bing.com/th/id/OIP.gN6Ll3KSqm3GWW3eZWuHGQHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 2,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 8,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `https://th.bing.com/th/id/OIP.QoxpSms_kqh20mmWnA1evAHaEK?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 10,
    //   wifi: false,
    //   laundry: false,
    // },
    // {
    //   id: 9,
    //   name: 'Capital Safe Towns',
    //   city: 'Portland',
    //   state: 'OR',
    //   photo: `https://th.bing.com/th/id/OIP.a8UBjeR-usfMQkY8ciHhTQHaEH?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true,
    // },
    // {
    //   id: 10,
    //   name: 'Seriously Safe Towns',
    //   city: 'Oakland',
    //   state: 'CA',
    //   photo: `https://th.bing.com/th/id/OIP.ZljRMyyizhmXBPMElUgxtQHaFj?w=210&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 10,
    //   wifi: false,
    //   laundry: false,
    // },
    // {
    //   id: 11,
    //   name: 'Capital Safe Towns',
    //   city: 'Portland',
    //   state: 'OR',
    //   photo: `https://th.bing.com/th/id/OIP.bWmk7UtUWT3YS9OkN5ju2QHaEr?w=282&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true,
    // },
// ];
    
    
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    return (await data.json()) ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
