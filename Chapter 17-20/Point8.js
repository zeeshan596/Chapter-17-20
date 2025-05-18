function maximum(){
    let array = [24,53,78,91,12]
    let max = array[0]
    for(z=0;z<array.length;z++){
        if(array[z]>max){
            max = array[z]
        }
    }
    document.writeln(`Array items : 24,53,78,91,12 <br>`)
    document.writeln(`The largest number is : ${max}`)
}
maximum();