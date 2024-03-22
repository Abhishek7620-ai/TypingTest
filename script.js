const passages = {
  "Passage 1": passage1,
  "Passage 2": passage2,
  "Passage 3": passage3,
  "Passage 4": passage4,
  "Passage 5": passage5,
  "Passage 6": passage6,
  "Passage 7": passage7,
  "Passage 8": passage8,
  "Passage 9": passage9,
  "Passage 10": passage10,
  "Passage 11": passage11,
  "Passage 12": passage12,
  "Passage 13": passage13,
  "Passage 14": passage14,
  "Passage 15": passage15,
  "Passage 16": passage16,
  "Passage 17": passage17,
  "Passage 18": passage18,
  "Passage 19": passage19,
  "Passage 20": passage20,
  "Passage 21": passage21,
  "Passage 22": passage22,
  "Passage 23": passage23,
  "Passage 24": passage24,
  "Passage 25": passage25,
  "Passage 26": passage26,
  "Passage 27": passage27,
  "Passage 28": passage28,
  "Passage 29": passage29,
  "Passage 30": passage30,
  "Passage 31": passage31,
  "Passage 32": passage32,
  "Passage 33": passage33,
  "Passage 34": passage34,
  "Passage 35": passage35,
  "Passage 36": passage36,
  "Passage 37": passage37,
  "Passage 38": passage38,
  "Passage 39": passage39,
  "Passage 40": passage40,
  "Passage 41": passage41,
  "Passage 42": passage42,
  "Passage 43": passage43,
  "Passage 44": passage44,
  "Passage 45": passage45,
  "Passage 46": passage46,
  "Passage 47": passage47,
  "Passage 48": passage48,
  "Passage 49": passage49,
  "Passage 50": passage50,
  "Passage 51": passage51,
  "Passage 52": passage52,
  "Passage 53": passage53,
  "Passage 54": passage54,
  "Passage 55": passage55,
  "Passage 56": passage56,
  "Passage 57": passage57,
  "Passage 58": passage58,
  "Passage 59": passage59,
  "Passage 60": passage60,
  "Passage 61": passage61,
  "Passage 62": passage62,
  "Passage 63": passage63,
  "Passage 64": passage64,
  "Passage 65": passage65,
  "Passage 66": passage66,
  "Passage 67": passage67,
  "Passage 68": passage68,
  "Passage 69": passage69,
  "Passage 70": passage70,
  "Passage 71": passage71,
  "Passage 72": passage72,
  "Passage 73": passage73,
  "Passage 74": passage74,
  "Passage 75": passage75,
  "Passage 76": passage76,
  "Passage 77": passage77,
  "Passage 78": passage78,
  "Passage 79": passage79,
  "Passage 80": passage80,
  "Passage 81": passage81,
  "Passage 82": passage82,
  "Passage 83": passage83,
  "Passage 84": passage84,
  "Passage 85": passage85,
  "Passage 86": passage86,
  "Passage 87": passage87,
  "Passage 88": passage88,
  "Passage 89": passage89,
  "Passage 90": passage90,
  "Passage 91": passage91,
  "Passage 92": passage92,
  "Passage 93": passage93,
  "Passage 94": passage94,
  "Passage 95": passage95,
  "Passage 96": passage96,
  "Passage 97": passage97,
  "Passage 98": passage98,
  "Passage 99": passage99,
  "Passage 100": passage100,
  "Passage 101": passage101,
  "Passage 102": passage102,
  "Passage 103": passage103,
  "Passage 104": passage104,
  "Passage 105": passage105,
  "Passage 106": passage106,
  "Passage 107": passage107,
  "Passage 108": passage108,
  "Passage 109": passage109,
  "Passage 110": passage110,
  "Passage 111": passage111,
  "Passage 112": passage112,
  "Passage 113": passage113,
  "Passage 114": passage114,
  "Passage 115": passage115,
  "Passage 116": passage116,
  "Passage 117": passage117,
  "Passage 118": passage118,
  "Passage 119": passage119,
  "Passage 120": passage120,
  "Passage 121": passage121,
"Passage 122": passage122,
"Passage 123": passage123,
"Passage 124": passage124,
"Passage 125": passage125,
"Passage 126": passage126,
"Passage 127": passage127,
"Passage 128": passage128,
"Passage 129": passage129,
"Passage 130": passage130,
"Passage 131": passage131,
"Passage 132": passage132,
"Passage 133": passage133,
"Passage 134": passage134,
"Passage 135": passage135,
"Passage 136": passage136,
"Passage 137": passage137,
"Passage 138": passage138,
"Passage 139": passage139,
"Passage 140": passage140,
"Passage 141": passage141,
"Passage 142": passage142,
"Passage 143": passage143,
"Passage 144": passage144,
"Passage 145": passage145,
"Passage 146": passage146,
"Passage 147": passage147,
"Passage 148": passage148,
"Passage 149": passage149,
"Passage 150": passage150
};
const minFontSize = 10; 
const maxFontSize = 30; 
const displayPassage = document.getElementById("displaypassage");
const inputElement = document.getElementById('textInput');
const wordCountElement = document.getElementById('wordCount');
const keystrokesCountElement = document.getElementById('keystrokesCount');
const pendingWordCountElement = document.getElementById('pendingWord');
const upperBoxText = document.getElementById('loremIpsumBox');
const totalWordsCount = document.getElementById('totalWordsCount');
const backSpaceCount = document.getElementById('backspaceCount');
const textInput = document.getElementById('textInput');
const timerDisplay = document.getElementById('screenTimer');


let currentValue = inputElement.value;
let words = currentValue.trim().split(/\s+/);
let prevWordCount = words.length;
let flag = 0;

let startTime;
let timerInterval;
let elapsedTime = 0;
let elapsedTimeInSeconds=0;

let totalKeyStrokes2000 = 0;
let correctKeyStroke2000 = 0;
let incorrectKeyStrokes2000 = 0;
let totalWords2000 = 0;
let correctWords2000 = 0;
let incorrectWords2000 = 0;
let correctkeystrokesPercent2000 = 0;
let resultBackSpaceCount = 0;
let passFailValue = "";

// JavaScript for increasing and decreasing font size
document.getElementById("increaseFontSize").addEventListener("click", function() {
    increaseFontSize("loremIpsumBox");
    increaseFontSize("textInput");
  });

  document.getElementById("decreaseFontSize").addEventListener("click", function() {
    decreaseFontSize("loremIpsumBox");
    decreaseFontSize("textInput");
  });

  function increaseFontSize(elementId) {
    var element = document.getElementById(elementId);
    var currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    var newFontSize = currentFontSize * 1.1; // Increase font size by 10%

    // Check if new font size exceeds the maximum limit
    if (newFontSize <= maxFontSize) {
        element.style.fontSize = newFontSize + "px";
    } else {
        element.style.fontSize = maxFontSize + "px"; // Set font size to maximum limit
    }
}

function decreaseFontSize(elementId) {
    var element = document.getElementById(elementId);
    var currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    var newFontSize = currentFontSize / 1.1; // Decrease font size by 10%

    // Check if new font size exceeds the minimum limit
    if (newFontSize >= minFontSize) {
        element.style.fontSize = newFontSize + "px";
    } else {
        element.style.fontSize = minFontSize + "px"; // Set font size to minimum limit
    }
}

function isPass(parameter){
    if(parameter >= 1860){
        return "Pass";
    }
    else{
        return "Fail";
    }
}

// Initialize upper box text
upperBoxText.textContent = passage1;
displayPassage.textContent = passageNumber();
let sampleContent = upperBoxText.innerText.trim().split(' ');
totalWordsCount.innerText = `${sampleContent.length}`;
pendingWordCountElement.innerText =`${sampleContent.length}`;

// Initialize previous character count
let previousCharacterCount = inputElement.value.length;
let currentCharacterCount = 0;

inputElement.addEventListener('input', function(event) {
    let sample = upperBoxText.innerText.trim().split(' ');
    
    currentValue = inputElement.value;
    words = currentValue.trim().split(/\s+/);
    wordCount = words.length;
    const sanitizedValue = currentValue.replace(/\s{2,}/g, ' ');
    if (currentValue !== sanitizedValue) {
        inputElement.value = sanitizedValue;
    }
    
    currentCharacterCount = currentValue.length;
    flag =1;
    if(prevWordCount>wordCount && flag){
      //correctKeyStroke2000 -= sample[prevWordCount]-sample(wordIndex);
      flag = 0;
    }
    prevWordCount = wordCount;

     if (currentCharacterCount < previousCharacterCount && flag) {
      correctKeyStroke2000 -= previousCharacterCount-currentCharacterCount;
        // Increment the backspace count
        flag = 0;
        
        backSpaceCount.textContent = `${parseInt(backSpaceCount.textContent) + (previousCharacterCount - currentCharacterCount)}`;
        resultBackSpaceCount = backSpaceCount.textContent;
    }
    
    correctKeyStroke2000 = calculateCorrectKeystrokes(sample, words)[0];
    correctWords2000 = calculateCorrectKeystrokes(sample, words)[1];

    


  
  
    

    // correctWords2000 = 0;
    // correctKeyStroke2000 = 0;
    // Filter words that match sample words or occur later in the sample


    // Update previous character count
    previousCharacterCount = currentCharacterCount;

    // Other counting logic
    // Count words
    wordCountElement.textContent = `${wordCount}`;
    totalWords2000 = wordCount;
    incorrectWords2000 = totalWords2000 - correctWords2000;

    // Count keystrokes
    const actualKeystrokesCount = currentCharacterCount - (currentValue.match(/ +/g) || []).reduce((total, space) => total + space.length - 1, 0);
    keystrokesCountElement.textContent = `${actualKeystrokesCount}`;
    totalKeyStrokes2000 = actualKeystrokesCount;
    incorrectKeyStrokes2000 = totalKeyStrokes2000 - correctKeyStroke2000;
    correctkeystrokesPercent2000 = (correctKeyStroke2000/totalKeyStrokes2000)*100;
    correctkeystrokesPercent2000 = parseFloat(correctkeystrokesPercent2000.toFixed(2));
    passFailValue = isPass(correctKeyStroke2000);

    // Count Pending words
    pendingWordCountElement.textContent = `${parseInt(totalWordsCount.textContent) - parseInt(wordCountElement.textContent)}`;
    if(!inputElement.value){
      previousCharacterCount = 0;
  }
});

inputElement.addEventListener('keyup', function(event) {
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000); // Start updating timer every second
    }
    
    if (event.key === 'Backspace') {
        // Update the word count after backspace
        const currentValue = inputElement.value;
        const words = currentValue.trim().split(/\s+/).filter(word => word !== ''); // Filter out empty strings
        const wordCount = words.length;
        wordCountElement.textContent = `${wordCount}`;
        totalWords2000 = wordCount;
        incorrectWords2000 = totalWords2000 - correctWords2000;
        if (!currentValue) {
            pendingWordCountElement.textContent = `${sampleContent.length}`;
        }
    }
});
let CurrentDisplaySeconds = document.getElementById("screenTimer").textContent.split(":").map(Number)[0]*60 + document.getElementById("screenTimer").textContent.split(":").map(Number)[1]
function updateTimer() {
  CurrentDisplaySeconds = document.getElementById("screenTimer").textContent.split(":").map(Number)[0]*60 + document.getElementById("screenTimer").textContent.split(":").map(Number)[1]
    const currentTime = new Date();
    elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
    const remainingTimeInSeconds = CurrentDisplaySeconds - elapsedTimeInSeconds; // 10 minutes = 600 seconds
    const minutes = Math.floor(remainingTimeInSeconds / 60);
    const seconds = remainingTimeInSeconds % 60;
    timerDisplay.innerHTML = `${minutes}:${("0"+seconds).slice(-2)}`;

    if (remainingTimeInSeconds <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Time's up!";
        showPopup();
    }
}
function resetTimer() {
    clearInterval(timerInterval); // Clear any existing interval
    startTime = false;
    resetAllData();
    timerDisplay.textContent = "10:00"; // Reset the timer display to initial value
}


function showPopup() {
  let tableContents = `<style>
 

  .container {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .heading {
    text-align: center;
    margin-bottom: 10px;
    margin-top:0;
    font-size: 20px;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .table {
    font-size:12px;
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .table th,
  .table td {
    border: 1px solid #ddd;
    padding: 0;
    text-align: left;
  }
 

  .table th {
    background-color: #3498db; /* Blue */
    font-weight:bold;
    color: #fff;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }

  .table th:hover {
    background-color: #2980b9; /* Darker Blue */
  }

  .table caption {
    text-align: center;
    margin-bottom: 0;
    margin-top:0;
  }

  .table th,
  .table td {
    padding: 10px;
  }

  .table tr:hover {
    background-color: #f5f5f5; /* Light Grey */
  }

  .button-container {
    text-align: center;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
    transition: background-color 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: #e86154;
  }

  .popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    padding: 20px;
    z-index: 9999;
  }

  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff6f61;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .popup-close:hover {
    background-color: #e86154;
  }

  .instructions-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .instructions {
    flex-basis: 48%;
    font-size: 16px;
    color: #666;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 20px; /* Added margin-right */
    margin-top: 20px; /* Added margin-top */
  }

  .instructions h3 {
    color: #ff6f61;
  }

  .instructions p {
    color: #666;
  }

  .table-container {
    display: flex;
    justify-content: space-between;
  }

  .table-wrapper {
    flex-basis: 48%;
  }

  .exit-button-container {
    text-align: center;
    margin-top: 20px;
  }

  /* Different color for the second table */
  .table-alt th {
    background-color: #2ecc71; /* Green */
  }

  /* Different color for the third table */
  .table-alt-2 th {
    background-color: #e74c3c; /* Red */
  }

  /* Hover state for table rows */
  .table tr:hover {
    background-color: #f5f5f5; /* Light Grey */
  }

  /* Styling for the exit button */
  .exit-button-container button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
    display: block;
    transition: background-color 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .exit-button-container button:hover {
    background-color: #e86154;
  }

  /* Styling for the top section */
  .container {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff; /* White background */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .table td {
    max-height:10px;
    background-color: #e6ffe6; /* Light green */
}

  
  .table td:hover {
    background-color: #ffffff; /* White background on hover */
  }
  
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333; /* Dark grey text color */
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffc0cb; /* Pink background */
  }
  

  .top-section h2 {
    margin: 0;
    font-size: 24px;
  }

  .top-section p {
    margin: 0;
    font-size: 16px;
    color: #666;
  }

  /* Styling for the result text */
  .result-text {
    color: red; /* Red */
    width:100%;
    height:25px;
    font-size: 18px;
  }
  /* Styles for the right column */
.table td:nth-child(2) {
width: 5%; /* Adjust the width as needed */
}

</style>

<div class="container">
  <h2 class="heading">Typing Test Results</h2>
  <div class="top-section">
    <div style="display:block;">
      <p>Passage Name: ${passageNumber()}</p></div>
      <div><p>Used Typing Time: ${parseInt(elapsedTimeInSeconds/60)}min ${elapsedTimeInSeconds%60}sec</p>
    </div>
    <div>
      <div class="result-text
      ">Result : ${passFailValue}</div>
    </div>
  </div>

  <div class="table-container">
    <div class="table-wrapper">
      <table class="table">
        <caption><h3>Results for first 2000 keystrokes</h3></caption>
        <tr>
          <th>Attribute</th>
          <th>Result</th>
        </tr>
        <tr>
        <td>Total Typed Keystrokes Count in First 2000 Keystrokes:</td>
        <td>${totalKeyStrokes2000}</td>
      </tr>
      <tr>
        <td>Correct typed Keystrokes count in first 2000 Keystrokes</td>
        <td>${correctKeyStroke2000}</td>
      </tr>
      <tr>
        <td>Incorrect typed Keystrokes count in first 2000 Keystrokes</td>
        <td>${incorrectKeyStrokes2000}</td>
      </tr>
      <tr>
        <td>Total Words Count in first 2000 keystrokes</td>
        <td>${totalWords2000}</td>
      </tr>
      <tr>
        <td>Correct Words Count in first 2000 keystrokes</td>
        <td>${correctWords2000}</td>
      </tr>
      <tr>
        <td>Incorrect Word Counts in first 2000 keystrokes</td>
        <td>${incorrectWords2000}</td>
      </tr>
      <tr>
        <td>Correct Keystrokes % In First 2000 Keystrokes:</td>
        <td>${correctkeystrokesPercent2000}%</td>
      </tr>
      <tr>
        <td>Result according to correct keystrokes in first 2000 keystrokes</td>
        <td>${passFailValue}</td>
      </tr>
      </table>
    </div>

    <div class="table-wrapper">
      <table class="table table-alt"> <!-- Added class for second table -->
        <caption><h3>Result for full Passage</h3></caption>
        <tr>
          <th>Attribute</th>
          <th>Result</th>
          <tr>
          <td>Total Typed Keystrokes Count in passage:</td>
          <td>${totalKeyStrokes2000}</td>
        </tr>
        <tr>
          <td>Correct typed Keystrokes count in passage</td>
          <td>${correctKeyStroke2000}</td>
        </tr>
        <tr>
          <td>Incorrect typed Keystrokes count in passage</td>
          <td>${incorrectKeyStrokes2000}</td>
        </tr>
        <tr>
          <td>Total Words Count in Passage</td>
          <td>${totalWords2000}</td>
        </tr>
        <tr>
          <td>Correct Words Count in Passage</td>
          <td>${correctWords2000}</td>
        </tr>
        <tr>
          <td>Incorrect Word Counts in Passage</td>
          <td>${incorrectWords2000}</td>
        </tr>
        <tr>
          <td>Correct Keystrokes % In Passage:</td>
          <td>${correctkeystrokesPercent2000}%</td>
        </tr>
        <tr>
          <td>Result according to correct keystrokes in Passage</td>
          <td>${passFailValue}</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="instructions-container">
    <div class="instructions">
      <h3>Instructions:</h3>
      <p>Type the given passage accurately and quickly.</p>
    </div>

    <div class="table-wrapper">
      <table class="table table-alt-2"> <!-- Added class for third table -->
        <caption><h3>Additional Metrics</h3></caption>
        <tr>
          <th>Attribute</th>
          <th>Result</th>
        </tr>
        </tr>
          <tr>
            <td>Character per minute (CPM)</td>
            <td id="cpm">${((totalKeyStrokes2000/elapsedTimeInSeconds)*60).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Words Per Minute (GWPM)</td>
            <td id="gwpm">${((totalWords2000/elapsedTimeInSeconds)*60).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Net Words Per Minute (NWPM)</td>
            <td id="nwpm">${((correctWords2000/elapsedTimeInSeconds)*60).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td id="accuracy">${((((correctWords2000/elapsedTimeInSeconds)*60)/((totalWords2000/elapsedTimeInSeconds)*60))*100).toFixed(2)}%</td>
          </tr>
          <tr>
            <td>Backspace Count</td>
            <td id="backspaceCount">${resultBackSpaceCount}</td>
          </tr>
      </table>
    </div>
  </div>

  <div class="exit-button-container">
    <button onclick="hideResult2()">Exit To Test</button>
  </div>

  <!-- Popup for result -->
  <div class="popup" id="popup">
    <div class="popup-content">
      <h3 class="heading">Result: Pass</h3>
    </div>
  </div>
</div>


            `

document.getElementById('result1').innerHTML=tableContents;
document.getElementById('result1').style.display = 'block';
}
function hideResult2() {
    document.getElementById('result1').style.display = 'none';
  }

function stopTimer() {
    clearInterval(timerInterval);
 }







 function resetAllData(){
  currentCharacterCount=0;
  previousCharacterCount=0;
  textInput.value = "";
  totalKeyStrokes2000 = 0;
  correctKeyStroke2000 = 0;
  incorrectKeyStrokes2000 = 0;
  totalWords2000 = 0;
  correctWords2000 = 0;
  incorrectWords2000 = 0;
  correctkeystrokesPercent2000 = 0;
  resultBackSpaceCount = 0;
  wordCountElement.innerText = '0';
  keystrokesCountElement.innerText = 0;
  pendingWordCountElement.innerText = upperBoxText.innerText.split(" ").length;
  totalWordsCount.innerText = upperBoxText.innerText.split(" ").length;
  backSpaceCount.innerText = 0 ;

}
function calculateCorrectKeystrokes(screenWords, userWords) {
  let correctKeystrokes = 0;
  let correctWords = 0;
  let screenIndex = 0;
  let userIndex = 0;

  // Iterate through both arrays
  while (screenIndex < screenWords.length && userIndex < userWords.length) {
      if (screenWords[screenIndex] === userWords[userIndex]) {
          // Count characters in the matched word
          correctKeystrokes += screenWords[screenIndex].length;
          correctWords++;

          // Move to the next word in both inputs
          screenIndex++;
          userIndex++;
      } else {
          // Check if the current word in user input is a substring of any word in screen input
          let found = false;
          for (let i = screenIndex; i < screenWords.length; i++) {
              if (screenWords[i].startsWith(userWords[userIndex])) {
                  // If found, penalize for substitution or addition
                  correctKeystrokes -= screenWords[i].length - userWords[userIndex].length;
                  screenIndex = i + 1;
                  userIndex++;
                  found = true;
                  break;
              }
          }
          if (!found) {
              // If not found, move to the next word in user input
              userIndex++;
          }
      }
  }

  // Check for any remaining words in the user input
  while (userIndex < userWords.length) {
      correctKeystrokes--; // Deduct 1 for each additional word
      userIndex++;
  }

return [correctKeystrokes+correctWords-1, correctWords];
}









function updateTimerforSelect() {
  // Get the selected time from the dropdown
  const selectedTime = document.getElementById("timeInput").value;
  
  // Split the current timer into minutes and seconds
  const [currentMinutes, currentSeconds] = document.getElementById("screenTimer").textContent.split(":").map(Number);
  
  // Calculate the new time by adding the selected time to the current tim
  let newSecond = 0;
  let newMinutes = parseInt(selectedTime);
  if(selectedTime.includes(":")){
    newSecond = parseInt(selectedTime.split(":")[1]);
    newMinutes = parseInt(selectedTime.split(":").map(Number)[0]);

  }
  else if(selectedTime.includes(".")){
    newSecond = parseInt(selectedTime.split(".")[1]);
    newMinutes = parseInt(selectedTime.split(".").map(Number)[0]);

  }
  else if(selectedTime.includes(" ")){
    newSecond = parseInt(selectedTime.split(" ")[1]);
    newMinutes = parseInt(selectedTime.split(" ").map(Number)[0]);

  }
  
  // Update the timer display with the new time
  document.getElementById("screenTimer").textContent = `${newMinutes ? newMinutes : "00"}:${newSecond ? ("0"+newSecond).slice(-2) : "00"}`;
  CurrentDisplaySeconds = document.getElementById("screenTimer").textContent.split(":").map(Number)[0]*60 + document.getElementById("screenTimer").textContent.split(":").map(Number)[1]
  document.getElementById("timeInput").value = ""
}

function changePassage( selectedPassage) {

  upperBoxText.textContent = passages[selectedPassage] || "Passage not found!";
  
  displayPassage.textContent = passageNumber();
  resetAllData();
}

function resetAllSelects(){
  document.querySelectorAll('select')[1].value = "Hard Level"
}


function passageNumber() {
  const passages = {
    [passage1]: "Passage 1",
    [passage2]: "Passage 2",
    [passage3]: "Passage 3",
    [passage4]: "Passage 4",
    [passage5]: "Passage 5",
    [passage6]: "Passage 6",
    [passage7]: "Passage 7",
    [passage8]: "Passage 8",
    [passage9]: "Passage 9",
    [passage10]: "Passage 10",
    [passage11]: "Passage 11",
    [passage12]: "Passage 12",
    [passage13]: "Passage 13",
    [passage14]: "Passage 14",
    [passage15]: "Passage 15",
    [passage16]: "Passage 16",
    [passage17]: "Passage 17",
    [passage18]: "Passage 18",
    [passage19]: "Passage 19",
    [passage20]: "Passage 20",
    [passage21]: "Passage 21",
    [passage22]: "Passage 22",
    [passage23]: "Passage 23",
    [passage24]: "Passage 24",
    [passage25]: "Passage 25",
    [passage26]: "Passage 26",
    [passage27]: "Passage 27",
    [passage28]: "Passage 28",
    [passage29]: "Passage 29",
    [passage30]: "Passage 30",
    [passage31]: "Passage 31",
    [passage32]: "Passage 32",
    [passage33]: "Passage 33",
    [passage34]: "Passage 34",
    [passage35]: "Passage 35",
    [passage36]: "Passage 36",
    [passage37]: "Passage 37",
    [passage38]: "Passage 38",
    [passage39]: "Passage 39",
    [passage40]: "Passage 40",
    [passage41]: "Passage 41",
    [passage42]: "Passage 42",
    [passage43]: "Passage 43",
    [passage44]: "Passage 44",
    [passage45]: "Passage 45",
    [passage46]: "Passage 46",
    [passage47]: "Passage 47",
    [passage48]: "Passage 48",
    [passage49]: "Passage 49",
    [passage50]: "Passage 50",
    [passage51]: "Passage 51",
    [passage52]: "Passage 52",
    [passage53]: "Passage 53",
    [passage54]: "Passage 54",
    [passage55]: "Passage 55",
    [passage56]: "Passage 56",
    [passage57]: "Passage 57",
    [passage58]: "Passage 58",
    [passage59]: "Passage 59",
    [passage60]: "Passage 60",
    [passage61]: "Passage 61",
    [passage62]: "Passage 62",
    [passage63]: "Passage 63",
    [passage64]: "Passage 64",
    [passage65]: "Passage 65",
    [passage66]: "Passage 66",
    [passage67]: "Passage 67",
    [passage68]: "Passage 68",
    [passage69]: "Passage 69",
    [passage70]: "Passage 70",
    [passage71]: "Passage 71",
    [passage72]: "Passage 72",
    [passage73]: "Passage 73",
    [passage74]: "Passage 74",
    [passage75]: "Passage 75",
    [passage76]: "Passage 76",
    [passage77]: "Passage 77",
    [passage78]: "Passage 78",
    [passage79]: "Passage 79",
    [passage80]: "Passage 80",
    [passage81]: "Passage 81",
    [passage82]: "Passage 82",
    [passage83]: "Passage 83",
    [passage84]: "Passage 84",
    [passage85]: "Passage 85",
    [passage86]: "Passage 86",
    [passage87]: "Passage 87",
    [passage88]: "Passage 88",
    [passage89]: "Passage 89",
    [passage90]: "Passage 90",
    [passage91]: "Passage 91",
    [passage92]: "Passage 92",
    [passage93]: "Passage 93",
    [passage94]: "Passage 94",
    [passage95]: "Passage 95",
    [passage96]: "Passage 96",
    [passage97]: "Passage 97",
    [passage98]: "Passage 98",
    [passage99]: "Passage 100",
    [passage100]: "Passage 100",
    [passage101]: "Passage 101",
    [passage102]: "Passage 102",
    [passage103]: "Passage 103",
    [passage104]: "Passage 104",
    [passage105]: "Passage 105",
    [passage106]: "Passage 106",
    [passage107]: "Passage 107",
    [passage108]: "Passage 108",
    [passage109]: "Passage 109",
    [passage110]: "Passage 110",
    [passage111]: "Passage 111",
    [passage112]: "Passage 112",
    [passage113]: "Passage 113",
    [passage114]: "Passage 114",
    [passage115]: "Passage 115",
    [passage116]: "Passage 116",
    [passage117]: "Passage 117",
    [passage118]: "Passage 118",
    [passage119]: "Passage 119",
    [passage120]: "Passage 120",
    [passage121]: "Passage 121",
    [passage122]: "Passage 122",
    [passage123]: "Passage 123",
    [passage124]: "Passage 124",
    [passage125]: "Passage 125",
    [passage126]: "Passage 126",
    [passage127]: "Passage 127",
    [passage128]: "Passage 128",
    [passage129]: "Passage 129",
    [passage130]: "Passage 130",
    [passage131]: "Passage 131",
    [passage132]: "Passage 132",
    [passage133]: "Passage 133",
    [passage134]: "Passage 134",
    [passage135]: "Passage 135",
    [passage136]: "Passage 136",
    [passage137]: "Passage 137",
    [passage138]: "Passage 138",
    [passage139]: "Passage 139",
    [passage140]: "Passage 140",
    [passage141]: "Passage 141",
    [passage142]: "Passage 142",
    [passage143]: "Passage 143",
    [passage144]: "Passage 144",
    [passage145]: "Passage 145",
    [passage146]: "Passage 146",
    [passage147]: "Passage 147",
    [passage148]: "Passage 148",
    [passage149]: "Passage 149",
    [passage150]: "Passage 150"
  };

  return passages[upperBoxText.textContent] || "Passage not found!";
}




