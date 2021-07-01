
async function test(){
    // const response = await fetch("json/empdata.json");
    // const employees = await response.json();
    const response = await("hello")
    const employees = await response;

    return employees;
}

test().then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});


