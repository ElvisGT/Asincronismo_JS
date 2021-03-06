const somethingWillHappen = () => {
    return new Promise((resolve,reject) =>{
        if(true)
        {
            resolve("Hello World");
        }
        else
        {
            reject("Ups!!");
        }
    
    });
}

somethingWillHappen()
.then(response => console.log(response))
.catch(error => console.error(error));
///////////////////////////////
const somethingWillHappen2 = () => {
    return new Promise((resolve,reject)=>{
        if(true)
        {
            setTimeout(() => resolve("True"),3000);
        }
        else {
            const error = new Error("Error");
            reject(error);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(error => console.error(error));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => console.log('Array of results',response))
.catch(error => console.error(error));