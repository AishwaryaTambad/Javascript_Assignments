function search(){
   var arr=["a","b","c","d","e"];//stored the list in a variable
   var get= document.getElementById("s2").value;// took the value from the text box
   var flag=0;
    for(var i=0;i<arr.length;i++){ //ierating the loop upto the elements in an array
        if(arr[i]==get){ //if the given search element and array element becomes same,
           flag=1;// then flag is set to 1 .
           break; // if the serached element is found then break the loop and go the respective condition.
        }
    
    }
    if(flag==1){ // flag is 1 show the element and position
        document.write("<br>"+"Element:"+get);
    document.write("<br>"+"element found at:"+(i+1));
    }
    else{ //the msg is given
        document.write("<br>"+"element not found");
    }
}

    

    



   

