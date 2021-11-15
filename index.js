const fs=require('fs');
const databuffer=fs.readFileSync('demo.json');
//it return binary data.so convert to string
const datajson=databuffer.toString();
console.log(datajson);
const newdata=JSON.parse(datajson);
newdata.name='nagaraj';
newdata.age=27;
const userjson=JSON.stringify(newdata);
fs.writeFileSync('demo.json',userjson)
