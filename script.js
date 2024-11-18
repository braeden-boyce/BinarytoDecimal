// Binary base 2 to decimal base 10 converter

function convertBinaryToDecimal()
{
    const binaryInput = document.getElementById("binaryInput").value;
    const result = document.getElementById("result")

    const decimalOutput = parseInt(binaryInput, 2);

    if (/^[01]+$/.test(binaryInput))
    {
        const decimalOutput = parseInt(binaryInput, 2);
        result.innerText = decimalOutput; 
    } 
    else
    {
        result.innerText = "Please enter a valid binary value to convert.";
    }
}