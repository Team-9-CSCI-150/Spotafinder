


//JSON

var str= '{"listperson":["id": "02","firstname":"Alfred","age":"36"}, {"id": "03","firstname":"Jacob","age":"23"}],"city":"Fresno"}';
var j1=JSON.parse(str);

//jacob
//alert(JSON.parse(str)["listperson"][1]["firstname"]);
console.log(j1.listperson[1]);