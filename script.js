function convert(){
    var From = document.getElementById('fromUnit').value; // taking values from fromunit section
    var To = document.getElementById("Tounit").value; // taking values from tounit section
    var Temp = parseFloat(document.getElementById("Temperature").value);

    var convertedvalue ; 
    var resultunit ;

    // Perform Conversion

    switch(From){
        case "C" :
            if(To === 'F'){
                convertedvalue = (Temp * 9/5) + 32;
                resultunit = 'F';
            }
            else if( To === 'K'){
                convertedvalue = Temp + 273;
                resultunit = 'K'
            }
            else{
                convertedvalue = Temp ;
                resultunit = 'C'
            }
            break;
        case "F" :
            if(To === 'C'){
                convertedvalue = (Temp * 5/9) - 32;
                resultunit = 'C';
            }
            else if(To === 'K'){
                convertedvalue = (Temp-32)*5/9 + 273 ; 
                resultunit = 'K';
            }
            else{
                convertedvalue = Temp;
                resultunit = 'F';
            }
            break;
        case "K" :
            if(To === "C"){
                convertedvalue = Temp - 273;
                resultunit = "C";
            }
            else if(To === "F"){
                convertedvalue = (Temp-273)*9/5 + 32 ;
                resultunit = "F";
            }
            else{
                convertedvalue = Temp;
                resultunit = "K";
            }
            break;
    }
const res = document.getElementById("result");
res.value = convertedvalue.toFixed(2) +" " +  resultunit;

}
