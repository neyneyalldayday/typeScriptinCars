// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck  extends Vehicle implements AbleToTow{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  
constructor(
  vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
){
 super();

 this.vin = vin;
 this.color = color;
 this.make = make;
 this.model = model;
 this.year = year;
 this.weight = weight;
 this.topSpeed = topSpeed;

 wheels.length !== 4 ? this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]: this.wheels = wheels;

 this.towingCapacity = towingCapacity;
}
  
  tow(vehicle: Truck | Motorbike | Car): void {   
    const name = vehicle.make && vehicle.model ? `${vehicle.make} ${vehicle.model}` : 'Vehicle';

    vehicle.weight <= this.towingCapacity ? console.log(`${name} is being towed $$$$$$$$$$$$$$$$$$`) : console.log(`${name} is too heavy.`);
  }
  
    override printDetails(): void {
      super.printDetails();

      const deetsKey = ['VIN', 'Color', 'Make' , 'Model', 'Year', 'Weight', 'Top Speed', 'Towing Capacity'];
      const deetsValue = [this.vin, this.color, this.make, this.model, this.year, this.weight, this.topSpeed, this.towingCapacity];

      for (let i = 0; i < deetsKey.length; i++){
        console.log(`${deetsKey[i]}: ${deetsValue[i]}`)
      };

      this.wheels.forEach((wheel) => {
        console.log(`Wheel 1: ${wheel.getDiameter} inch whith a ${wheel.getTireBrand} tire`);
      });
    }
}
// Export the Truck class as the default export
export default Truck;
