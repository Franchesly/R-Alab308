let csvObjects = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];

csvObjects.pop();

csvObjects.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});

csvObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(csvObjects);


function calculateAverageAge(data){
    let totalAge = 0;
    
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        totalAge += parseInt(obj.age);
    }

    let averageAge = totalAge / data.length;
    return averageAge;
}

const averageAge = calculateAverageAge(csvObjects);
console.log("Average Age", averageAge);
