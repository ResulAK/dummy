
import uniqueIdGenerator from "./uniqueIdGenerator.js";

//  1,000,000,000,000 - One Trillion

window._resMethods = {};

window.dataArr = [];

window.create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}



function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
	.replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0, 
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

let existingData;


function init() {
    uniqueIdGenerator();
    
    let standard_UUID = '1b7077f4-cb1d-44bd-8d39-b4d2af60b40e';
    let profilId = "P_" + window._resMethods.decimalToHexString(window._resMethods.getFPID.get(standard_UUID));

    document.querySelector("#head").innerText = standard_UUID;
    document.querySelector("#body").innerText = profilId;


    // for (let index = 0; index < 10000; index++) {
    //     // window.dataArr.push(window._resMethods.decimalToHexString(window._resMethods.getFPID.get(create_UUID())));
    //     // console.log(window._resMethods.decimalToHexString(window._resMethods.getFPID.get('c603eea5-ae34-4f1d-8862-acbce734eade')))
    //     // console.log(create_UUID());
    //     // window.dataArr.push(create_UUID());
    //     // let currentData = uuidv4();
    //     let currentData = create_UUID();

    //     if(!!existingData && existingData == currentData) {
    //         console.log("Found duplicate value: ", existingData);
    //         console.log("At Index: ", index);
    //     }

    //     if(!existingData) {
    //         console.log("Adding current data into existing data");
    //         existingData = currentData;
    //     }

    //     // console.log(currentData);
    //     window.dataArr.push(currentData);
    // }



    // console.log('====================================');
    // console.log("Looping Done");
    // console.log('====================================');

    // console.log('====================================');
    // console.log("Loaded array: ", window.dataArr);
    // console.log('====================================');
}

console.log('====================================');
console.log("Initiating Loop in 2 secs");
console.log('====================================');

// setTimeout(() => {

    init();
    
// }, 2000);





