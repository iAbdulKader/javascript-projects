
function convert(){
    var inputNumber = document.getElementById('input-number').value;
    var inputSelection = document.getElementById('input').value;
    var outputSelection = document.getElementById('output').value;
    var inputSelection = document.getElementById('input').value;



    document.getElementById('input-show').innerText = `${inputSelection}`


    // Getting Input & processing

    if(inputSelection == 'Unit'){
        var inputNumber = "Unit"
    }
    if(inputSelection == 'Centimetres'){
       var inputNumber = inputNumber;

       document.getElementById('feet-inch-only').style.display = "none";
    }
    if(inputSelection == 'Metres'){
        var inputNumber = inputNumber * 100;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(inputSelection == 'Inches'){
        var inputNumber = inputNumber * 2.54;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(inputSelection == 'Feet'){
        var inputNumber = inputNumber * 30.48;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(inputSelection == 'Kilometres'){
        var inputNumber = inputNumber * 100000;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(inputSelection == 'Miles'){
        var inputNumber = inputNumber * 160934.4;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    
    //Converting

    if(outputSelection == 'Unit' || inputSelection == 'Unit'){
        var outputNumber = "Result"

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(outputSelection == 'Centimetres' && inputSelection != 'Unit'){
       var outputNumber = inputNumber;

       document.getElementById('feet-inch-only').style.display = "none";
    }
    if(outputSelection == 'Metres' && inputSelection != 'Unit'){
        var outputNumber = inputNumber / 100;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(outputSelection == 'Inches' && inputSelection != 'Unit'){
        var outputNumber = inputNumber / 2.54;

        document.getElementById('feet-inch-only').style.display = "none";
    }

    if(outputSelection == 'Feet' && inputSelection != 'Unit'){
        var outputNumber = inputNumber / 30.48;
        
    }

    if(outputSelection == 'Feet' && inputSelection != 'Unit' && inputSelection == 'Inches'){
        var outputNumberInOnlyFeet = Math.floor(inputNumber / 30.48);
        var outputNumberRestInInch = (inputNumber % 30.48) / 2.54;
        var outputNumberRestInInch = outputNumberRestInInch.toFixed(2);

        document.getElementById('feet-inch-only').style.display = "block";

        document.getElementById('feet-inch-only').innerText = `Or ${outputNumberInOnlyFeet}' ${outputNumberRestInInch}"`
    }

    if(outputSelection == 'Kilometres' && inputSelection != 'Unit'){
        var outputNumber = inputNumber / 100000;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    if(outputSelection == 'Miles' && inputSelection != 'Unit'){
        var outputNumber = inputNumber / 160934.4;

        document.getElementById('feet-inch-only').style.display = "none";
    }
    
    // Output Show

    document.getElementById('output-number').innerText = `${outputNumber}`

    document.getElementById('output-show').innerText = `${outputSelection}`

    
}
