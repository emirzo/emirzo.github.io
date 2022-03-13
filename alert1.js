let a=prompt("Вывести число"), b=prompt("Вывести число"), i;
function showMessage(){
    if(a>b){
        for(i=b; i<=a; i++){
            if(i%2==0){
                alert(i);
            }
        }
    }
    if(a<b){
        for(i=a; i<=b; i++){
            if(i%2==0){
                alert(i);
            }
        }
    }
}
showMessage();