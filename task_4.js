// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую 
// мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 


function Electrick(voltage, enable, secInHour) {
  this.voltage = voltage;
  this.enable = enable;
  this.secInHour = secInHour;
}

Electrick.prototype.turnOn = function (voltage){
      this.enable = true;
      this.voltage = voltage;
  }

Electrick.prototype.turnOff = function(voltage){
    this.enable = false;
    voltage = 0;
  }

Electrick.prototype.getUsePower = function(secInHour){
    if(this.enable === false){
      return 0;
    }else{
       let kW = this.voltage * secInHour;
       return kW;
    }
   
  }
 

const TV = new Electrick(30, true, 580);
const Lamp = new Electrick(20, true, 1000);
const ElectrickStove = new Electrick(100, false);

ElectrickStove.turnOnHotplate = function(hotplate){
  return this.voltage * hotplate;
}
// console.log(ElectrickStove.turnOnHotplate(3));

ElectrickStove.getUsePower = function(secInHour, hotplate){
  if(!hotplate){
    return this.voltage * secInHour;
  }else{
    let countHotplate = this.turnOnHotplate(hotplate);
    return this.voltage * secInHour + countHotplate;
  }
}

// console.log(ElectrickStove.getUsePower(300,2))

// console.log(ElectrickStove.turnOnHotplate(3,''))

// console.log(TV.getUsePower(580));

// console.log(TV.getUsePower(580) + Lamp.getUsePower(760));

// TV.turnOff()
// console.log(TV.getUsePower(50,360));