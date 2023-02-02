const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries; 

const reducer = () => {

    const batteries = (accumulator, element) => { 
        return accumulator + element;
    }
    totalBatteries = batteryBatches.reduce(batteries, 0);
}

reducer(); // must invoke the function in the program for the value of totalBatteries to change.  Unlike other labs, these tests do not invoke the function for you.  