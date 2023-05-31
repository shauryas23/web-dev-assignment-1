function show(text)
{
    var display = document.getElementById('show');
    display.value += text;
    
}

function remove()
{
    var display = document.getElementById('show');
    display.value = display.value.slice(0, -1);
}

function ClearAll()
{
    var display = document.getElementById('show');
    display.value = ""
}

function calculate()
{
    var display = document.getElementById('show');
    var val = display.value;

    //val.includes("sin") ? val = val.replace("sin", "Math.sin") : val;
    if(val.includes("sin"))
    {
        val=val.replace("sin", "Math.sin")
    }
    if(val.includes("cos"))
    {
        val = val.replace("cos", "Math.cos")
    }
    if(val.includes("tan"))
    {
        val = val.replace("tan", "Math.tan")
    }
    if(val.includes("log"))
    {
        val = val.replace("log", "Math.log10")
    }
    if(val.includes("ln"))
    {
        val = val.replace("ln", "Math.log")
    }
    if(val.includes("sqrt"))
    {
        val = val.replace("sqrt", "Math.sqrt")
    }
    if(val.includes("^"))
    {
        val = val.replace("^", "**")
    }
    if(val.includes("pi"))
    {
        val = val.replace("pi", "Math.PI")
    }
    if(val.includes("e"))
    {
        val = val.replace("e", "Math.E")
    }


   try 
    {
       
       if(eval(val) == 69)
       {
          display.value = 'niceee'
       }
       else
       {
        display.value = eval(val).toFixed(9);
       }

    } 
    catch(err) 
    {
        display.value = 'Error';
    }
}



function execute(event)
{
    if(event.key == "Enter")
    calculate();
}