function transformToObjects(csvArray) {
    let header = csvArray[0];
    let objects = [];
    for (let i = 1; i < csvArray.length; i++) {
        let row = csvArray[i];
        let obj = {};

        for (let j = 0; j < header.length; j++) {

            obj[header[j].toLowerCase()] = row[j];
        }
        objects.push(obj);
    }
    return objects;
}
const csv2DArray = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
];
const csvObjects = transformToObjects(csv2DArray);

   console.log(csvObjects);
