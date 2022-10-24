let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};
for (let prop in statistics){
    //Print out the value of the property that  starts with letter r 
    //OR value is an odd number 
    //because is an OR statement if one of the two is true print out
    if((prop.charAt(0) == "r")|| (statistics[prop] % 2 != 0)){
        console.log(prop , ":" , statistics[prop] );
    }

}
