document.addEventListener('DOMContentLoaded',()=>{
    executeOperations();
})

function executeOperations(){
    let operations = document.querySelectorAll(".operation");
    console.log(operations)

    for(let operation of operations){
        console.log(operation.dataset.operation)
        let result = 0;
        let value1 = parseFloat(operation.dataset.value1);
        let value2 = parseFloat(operation.dataset.value2);
        switch(operation.dataset.operation){
            case "sum":
                result = value1 + value2
                break
            case "multiply":
                result = value1 * value2
                break
        }
        operation.innerHTML = result;
    }
}