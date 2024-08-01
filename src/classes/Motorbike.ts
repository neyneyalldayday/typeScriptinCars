// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


class Motorbike extends Vehicle {
 
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  
constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
){
  super();

  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight= weight;
  this.topSpeed = topSpeed;
    
  wheels.length !== 2 ? this.wheels = [new Wheel(), new Wheel()] : this.wheels = wheels;

}

wheelie() : void {
  console.log(`your stupid ${this.make} ${this.model} is doing a wheeelie, you are so coool`)
}

  override printDetails(): void {
    super.printDetails();

    const deetsKey = ['VIN', 'Color', 'Make' , 'Model', 'Year', 'Weight', 'Top Speed'];
    const deetsValue = [this.vin, this.color, this.make, this.model, this.year, this.weight, this.topSpeed];

    for (let i = 0; i < deetsKey.length; i++){
      console.log(`${deetsKey[i]}: ${deetsValue[i]}`)
    }

    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch whith a ${this.wheels[0].getTireBrand} tire`);

    console.log(`Wheel2: ${this.wheels[1].getDiameter}  inch with a ${this.wheels[1].getTireBrand} tire`)
  }
}

export default Motorbike;
