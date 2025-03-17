function convertNumber() 
{
    const number = document.getElementById('numberInput').value;
    const fromBase = document.getElementById('fromBase').value;
    const toBase = document.getElementById('toBase').value;
    if (number === "") 
    {
        alert("Please enter a valid number.");
        return;
    }
    let decimalNumber;
    try 
    {
        decimalNumber = parseInt(number, fromBase);
        if (isNaN(decimalNumber)) throw new Error();
    } 
    catch (e) 
    {
        alert("Invalid input for the selected base.");
        return;
    }
    let convertedNumber = decimalNumber.toString(toBase).toUpperCase();
    document.getElementById('result').textContent = convertedNumber;
}
