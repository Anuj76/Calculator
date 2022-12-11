const defaultResult = 0;
let currentResult = defaultResult;
let arr = [];

function getUserNumberInput() //Gets input from input feild
{
return parseInt(userInput.value);
}

function createAndWriteOutput(operater,intialResult,enterNumber) //Only show calclulation 
{
const printCalculation =`${intialResult} ${operater} ${enterNumber}`;
outputResult(currentResult,printCalculation);//From vendor file
}

function creatingObject(operationIdentifire,intialResult,enterNumber,currentResult,)
{
const object ={
operation:operationIdentifire,
preResult:intialResult,
number:enterNumber,
result:currentResult,
};
arr.push(object);
console.log(arr);
}

function calculateResult(calclulationType)
{

if(calclulationType!='ADD' && calclulationType!='SUBTRACT' && calclulationType!='DIVIDE' && calclulationType !='MULTIPLY')
{
return;
}

const enterNumber = getUserNumberInput();
const intialResult = currentResult;
let mathOperator;
if(calclulationType=='ADD')
{
currentResult += enterNumber;
mathOperator='+'
}
else if(calclulationType=='SUBTRACT')
{
currentResult -= enterNumber;
mathOperator='-'
}
else if(calclulationType=='MULTIPLY')
{
currentResult *= enterNumber;
mathOperator='*'
}
else if(calclulationType=='DIVIDE')
{
currentResult /= enterNumber;
mathOperator='/'
}

createAndWriteOutput(mathOperator,intialResult,enterNumber);
creatingObject(calclulationType,intialResult,enterNumber,currentResult);
}

function add()
{
calculateResult('ADD');
}

function subtract()
{
calculateResult('SUBTRACT');
}

function multiply()
{
calculateResult('MULTIPLY');
}

function divide()
{
calculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);