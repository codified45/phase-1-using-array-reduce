const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = () => {

    const batteries = (accumulator, element) => { 
        let totalBatteries = accumulator + element;
        return totalBatteries;
    }

    return batteryBatches.reduce(batteries, 0);
}



            // const reducer = () => {

            //     const batteries = (totalBatteries, element) => { 
            //         return totalBatteries += element;
            //         // return totalBatteries;
            //     }

            //     totalBatteries = batteryBatches.reduce(batteries, 0);
                
            // }

// const batteries = () => {

//         let totalBatteries;




//     totalBatteries = batteryBatches.reduce(batteries, 0);
//     return totalBatteries            
// }




            // const reducer = () => {

            //     const batteries = (totalBatteries, element) => { 
            //         return totalBatteries += element;
            //         // return totalBatteries;
            //     }

            //     totalBatteries = batteryBatches.reduce(batteries, 0);
            //     return totalBatteries;
            // }


// const reducer = () => {

//     let totalBatteries;

//     const batteries = (accumulator, element) => { 
//         return accumulator + element;
//     }

//     totalBatteries = batteryBatches.reduce(batteries, 0);
//     return totalBatteries;
// }