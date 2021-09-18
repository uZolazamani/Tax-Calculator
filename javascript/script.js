var button = document.getElementById("btn");

button.onclick = function taxCalculator(){

    var grossIncome = document.getElementById("incomeField");
    var netIncome = document.getElementById("netField");
    netIncome.value = 0;
    var tax = document.getElementById("taxRate");
    var netMontly = document.getElementById("incomeMonthly");
    netMontly.value = 0;

    if(grossIncome.value >1 && grossIncome.value <=216200){
        tax.value = "18% of taxable income";   
        netIncome.value = `R ${Math.round((grossIncome.value - grossIncome.value*0.18)*100)/100}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - grossIncome.value*0.18)/12)*100)/100}`;
    }
    else if((grossIncome.value>216200) && (grossIncome.value <=337800)){
        tax.value = "R 38 916 + 26%";   
        let temp = grossIncome.value;
        temp -= 38916;
        netIncome.value = `R ${grossIncome.value - temp*0.26}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - temp*0.26)/12)*100)/100}`;
    }
    else if((grossIncome.value>337800) && (grossIncome.value <=467500)){
        tax.value = "R 70 532 + 31%";
        let temp = grossIncome.value;
        temp-= 70532;   
        netIncome.value = `R ${grossIncome.value - temp*0.31}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - temp*0.31)/12)*100)/100}`;
    }
    else if(grossIncome.value>467500 && grossIncome.value <=613600){
        tax.value = "R 110 739 + 36%";   
        let temp = grossIncome.value ;
        temp -= 110739;
        netIncome.value = `R ${grossIncome.value - temp*0.36}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - temp*0.36)/12)*100)/100}`;
    }
    else if(grossIncome.value>613600 && grossIncome.value <=782200){
        tax.value = "R 163 335 + 39%";   
        let temp = grossIncome.value ;
        temp -= 163335;
        netIncome.value = `R ${grossIncome.value - temp*0.39}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - temp*0.39)/12)*100)/100}`;
    }
    else if(grossIncome.value>782200 && grossIncome.value <=1656600){
        tax.value = "R 229 089 + 41%";   
        let temp = grossIncome.value; 
        temp -= 229089;
        netIncome.value = `R ${grossIncome.value - temp*0.41}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - temp*0.41)/12)*100)/100}`;
    }
    else if(grossIncome.value > 1656600){
        tax.value = "R 587 593 + 45%";   
        let temp = grossIncome.value; 
        temp -= 587593;
        netIncome.value = `R ${grossIncome.value - temp*0.45}`;
        netMontly.value = `R ${Math.round(((grossIncome.value - temp*0.45)/12)*100)/100}`;
    }
    else{
        alert("Value includes spaces or is below SARS range");
    }
}