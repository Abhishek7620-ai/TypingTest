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
  if (!startTime) {
    startTime = new Date();
    clearInterval(timerInterval); // Clear any existing interval
    timerInterval = setInterval(updateTimer, 1000); // Start updating timer every second
}
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
    prevWordCount = wordCount;

     if (currentCharacterCount < previousCharacterCount) {
        
        backSpaceCount.textContent = `${parseInt(backSpaceCount.textContent) + (previousCharacterCount - currentCharacterCount)}`;
        resultBackSpaceCount = backSpaceCount.textContent;
    }
    
    correctKeyStroke2000 = calculateCorrectKeystrokes(sample, words)[0];
    correctWords2000 = calculateCorrectKeystrokes(sample, words)[1];
    document.getElementById("errorcount").textContent = (calculateCorrectKeystrokes(sample, words)[2]);
    document.getElementById("box2").innerHTML = calculateCorrectKeystrokes(sample, words)[3].join(" ");
    document.getElementById("box1").innerHTML = calculateCorrectKeystrokes(sample, words)[4].join(" ");


  
  
    

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
    const currentTime = new Date();
    elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
    const remainingTimeInSeconds = CurrentDisplaySeconds - elapsedTimeInSeconds; // 10 minutes = 600 seconds
    const minutes = Math.floor(remainingTimeInSeconds / 60);
    const seconds = remainingTimeInSeconds % 60;
    timerDisplay.innerHTML = `${minutes}:${("0"+seconds).slice(-2)}`;

    if (remainingTimeInSeconds <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Time's up!";
        openTimeEndedPopup();
        disableInput();
    }
}

function resetTimer() {
    clearInterval(timerInterval); // Clear any existing interval
    startTime = false;
    resetAllData();
    timerDisplay.textContent = "10:00"; // Reset the timer display to initial value
}


function showPopup() {
  document.getElementById("usedtypingmin").innerText = parseInt(elapsedTimeInSeconds/60);
  document.getElementById("usedtypingsec").innerText = parseInt(elapsedTimeInSeconds%60);
  document.getElementById("resultofstudent").innerText = passFailValue;

  document.getElementById("TypedPassageName").innerText = passageNumber();
  document.getElementById("totalKeyStrokes2000").innerText = totalKeyStrokes2000;
  document.getElementById("correctKeyStroke2000").innerText = correctKeyStroke2000;
  document.getElementById("incorrectKeyStrokes2000").innerText = incorrectKeyStrokes2000;
  document.getElementById("totalWords2000").innerText = totalWords2000;
  document.getElementById("correctWords2000").innerText = correctWords2000;
  document.getElementById("incorrectWords2000").innerText = incorrectWords2000;
  document.getElementById("correctkeystrokesPercent2000").innerText = correctkeystrokesPercent2000;
  document.getElementById("resultofstudent2000").innerText = passFailValue;

  document.getElementById("totalKeyStrokesfull").innerText = totalKeyStrokes2000;
  document.getElementById("correctKeyStrokefull").innerText = correctKeyStroke2000;
  document.getElementById("incorrectKeyStrokesfull").innerText = incorrectKeyStrokes2000;
  document.getElementById("totalWordsfull").innerText = totalWords2000;
  document.getElementById("correctWordsfull").innerText = correctWords2000;
  document.getElementById("incorrectWordsfull").innerText = incorrectWords2000;
  document.getElementById("correctkeystrokesPercentfull").innerText = correctkeystrokesPercent2000;
  document.getElementById("resultofstudentfull").innerText = passFailValue;

  document.getElementById("cpm").innerText = ((totalKeyStrokes2000 / elapsedTimeInSeconds) * 60).toFixed(2);
  document.getElementById("gwpm").innerText = ((totalWords2000 / elapsedTimeInSeconds) * 60).toFixed(2);
  document.getElementById("nwpm").innerText = ((correctWords2000 / elapsedTimeInSeconds) * 60).toFixed(2);
  let accuracy = (((correctWords2000 / elapsedTimeInSeconds) * 60) / ((totalWords2000 / elapsedTimeInSeconds) * 60)) * 100;
  document.getElementById("accuracy").innerText = accuracy.toFixed(2);
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
  let arrayForComparingPassage2 =[...screenWords]
  let arrayForComparingPassage = [];
  let correctKeystrokes = 0;
  let correctWords = 0;

  let screenIndex = 0;
  let userIndex = 0;
  let errorCount = 0;

  while (screenIndex < screenWords.length && userIndex < userWords.length) {
      // Check if the words match exactly
      if (screenWords[screenIndex] === userWords[userIndex]) {
          correctKeystrokes += screenWords[screenIndex].length;
          correctWords++;
          arrayForComparingPassage.push(`<span style='color:green;font-weight:bold'>${screenWords[screenIndex]}</span>`)
          arrayForComparingPassage2[userIndex] =`<span style='color:green;font-weight:bold'>${screenWords[screenIndex]}</span>`
      } else {
          // Check for different types of error
          arrayForComparingPassage.push(`<span style='color:red'>${ userWords[userIndex]}</span>`)
          arrayForComparingPassage2[userIndex] = `<span style ="background-color:yellow">${ screenWords[userIndex]}</span>`
          arrayForComparingPassage2[screenWords.indexOf(userWords[userIndex])] =`<span style='color:green;font-weight:bold'>${screenWords[screenWords.indexOf(userWords[userIndex])]}</span>`
          
          
          // Omission of word
          errorCount++;
          console.log(errorCount)

          if (screenWords.slice(screenIndex + 1).join(" ").includes(userWords[userIndex])) {
              screenIndex++;
          }
          // Substitution of a wrong word or addition of a word
          else if (userWords.slice(userIndex + 1).join(" ").includes(screenWords[screenIndex])) {
              userIndex++;
          }
          // Spelling errors (repetition, addition, transposition, omission, substitution of letters)
          else {
              let screenWord = screenWords[screenIndex];
              let userWord = userWords[userIndex];
              let errors = 0;

              // Compare each character
              for (let i = 0; i < Math.min(screenWord.length, userWord.length); i++) {
                  if (screenWord[i] !== userWord[i]) {
                      errors++;
                  }
              }

              // Handle differences in word lengths
              errors += Math.abs(screenWord.length - userWord.length);

              // Penalize for each mistake
              correctKeystrokes += (screenWord.length - errors);
          }
      }

      screenIndex++;
      userIndex++;
  }

  return [Math.max(correctKeystrokes+correctWords-1,0), correctWords,errorCount,arrayForComparingPassage,arrayForComparingPassage2];
}








// Function to disable input for the text input field
function disableInput() {
  // Get reference to the text input field
  const textInput = document.getElementById('textInput');
  
  // Set the disabled attribute to true
  textInput.disabled = true;
}

function enableInput() {
  // Get reference to the text input field
  const textInput = document.getElementById('textInput');
  
  // Set the disabled attribute to false
  textInput.disabled = false;
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





// Object mapping languages to keyboard layouts
const keyboardLayouts = {
  'en-US': 'qwerty', // English US layout
  'hi-IN': 'devanagari', // Hindi Devanagari layout
  // Add more language-layout mappings as needed
};

// Function to detect user's language
function detectLanguage() {
  // Example: using navigator.language to get the language
  return navigator.language;
}

const marathiKeyboardMapping = {
  '`': '़',
  '1': '१',
  '2': '२',
  '3': '३',
  '4': '४',
  '5': '५',
  '6': '६',
  '7': '७',
  '8': '८',
  '9': '९',
  '0': '०',
  '-': 'ञ',
  '=': 'ृ',
  '[': 'ख्‍',
  ']': ',',
  '\\': '.',
  ';': 'य',
  "'": 'श्‍',
  ',': 'ए',
  '.': 'ण्‍',
  '/': 'ध्‍',
  ' ': ' ',
  '~': 'द्य',
  '!': '।',
  '@': '/',
  '#': ':',
  '$': 'रऱ्‍',
  '%': '-',
  '^': '"',
  '&': "'",
  '*': 'द्ध',
  '(': 'त्र',
  ')': 'ऋ',
  '_': '.',
  '+': '्',
  '{': 'क्ष्‍',
  '}': 'द्व',
  '|': '',
  ':': 'रू',
  '"': 'ष्‍',
  '<': 'ढ',
  '>': 'झ',
  '?': 'घ्‍',
  'A': 'ा',
  'B': 'ठ',
  'C': 'ब्‍',
  'D': 'क्‍',
  'E': 'म्‍',
  'F': 'थ्‍',
  'G': 'ळ',
  'H': 'भ्‍',
  'I': 'प्‍',
  'J': 'श्र',
  'K': 'ज्ञ',
  'L': 'स्‍',
  'M': 'ड',
  'N': 'छ',
  'O': 'व्‍',
  'P': 'च्‍',
  'Q': 'फ',
  'R': 'त्‍',
  'S': 'ै',
  'T': 'ज्‍',
  'U': 'न्‍',
  'V': 'ट',
  'W': 'ॅ',
  'X': 'ग्‍',
  'Y': 'ल्‍',
  'Z': 'र्‍',
  'a': 'ं',
  'b': 'इ',
  'c': 'ब',
  'd': 'क',
  'e': 'म',
  'f': 'ि',
  'g': 'ह',
  'h': 'ी',
  'i': 'प',
  'j': 'र',
  'k': 'ा',
  'l': 'स',
  'm': 'उ',
  'n': 'द',
  'o': 'व',
  'p': 'च',
  'q': 'ु',
  'r': 'त',
  's': 'े',
  't': 'ज',
  'u': 'न',
  'v': 'अ',
  'w': 'ू',
  'x': 'ग',
  'y': 'ल',
  'z': '्र',
};







function replaceWithMarathi(event) {
  const typedKey = event.key.toLowerCase(); // Convert to lowercase for case insensitivity
  const marathiEquivalent = marathiKeyboardMapping[typedKey];
  
  if (marathiEquivalent) {
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const textBefore = event.target.value.substring(0, selectionStart);
    const textAfter = event.target.value.substring(selectionEnd);
    event.target.value = textBefore + marathiEquivalent + textAfter;
    event.preventDefault(); // Prevent the default behavior of the key
    event.target.setSelectionRange(selectionStart + 1, selectionStart + 1); // Move cursor to the next position
  }
}
function convertKeyBoardToMarathi(){
inputElement.addEventListener('keypress', replaceWithMarathi);
}
function convertKeyboardToEnglish() {
  inputElement.removeEventListener('keypress', replaceWithMarathi);
}
function startTimerforButton() {
  if (!startTime) {
      startTime = new Date();
      clearInterval(timerInterval); // Clear any existing interval
      timerInterval = setInterval(updateTimer, 1000); // Start updating timer every second
  }
}

// script.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Get elements
const openPopupButton = document.getElementById('submitBtn');
const popupWrapper = document.getElementById('confirmationPopup');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');
const popupTimeEnded = document.getElementById('TimeEndedPopup');

// Function to open popup
function openTimeEndedPopup(){
  popupTimeEnded.style.display = "block";
}
function openPopup() {
  popupWrapper.style.display = 'block';
}

// Function to close popup
function closePopup() {
  popupWrapper.style.display = 'none';
}

// Event listeners
cancelButton.addEventListener('click', closePopup);
confirmButton.addEventListener('click', function(){
  // closePopup();
  showCompareScreen();
  closePopup();
});
document.getElementById("OkButton").addEventListener('click', function(){
  // closePopup();
 showCompareScreen();
  document.getElementById("TimeEndedPopup").style.display = 'none';
});
document.getElementById("CancelTimeButton").addEventListener('click', function(){
  // closePopup();
  document.getElementById("TimeEndedPopup").style.display = 'none';
  enableInput();
});


function showCompareScreen(){
  document.getElementById("comparescreen").style.display = "flex";
}
function validateSignupForm() {
  var signupUsername = document.getElementById("signup_username").value;
  var signupPassword = document.getElementById("signup_password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var email = document.getElementById("email").value;
  var fullname = document.getElementById("fullname").value;
  var dob = document.getElementById("dob").value;
  var signupError = document.getElementById("signupError");

  // Simple validation
  if (signupUsername === "" || signupPassword === "" || confirmPassword === "" || email === "" || fullname === "" || dob === "") {
      signupError.innerText = "All fields are required.";
      return false;
  }

  // Password confirmation
  if (signupPassword !== confirmPassword) {
      signupError.innerText = "Passwords do not match.";
      return false;
  }

  // You can add more complex validation here if needed

  return true;
}


// script.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const formDataJson = {};
  formData.forEach((value, key) => {
    formDataJson[key] = value;
  });

  sendDataToGoogleSheets(formDataJson);
});

async function sendDataToGoogleSheets(formData) {
  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbwh1QwPiZgPF6csBQ_0juYYJ7QAZTdXYplRRN08RZKL0zI1xE0hRfvUNFe2fRbRKDOspg/exec', // Replace with your Google Apps Script web app URL
      formData
    );
    console.log('Form submitted successfully:', response.data);
    alert('Form submitted successfully!');
    // Clear form fields if needed
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred while submitting the form.');
  }
}
