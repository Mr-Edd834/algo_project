
const sentenceInput=document.getElementById("sentence");
  
function analyzeSentence() {
    const sentence = sentenceInput.value.trim(); // get the input text
    if(sentence.endsWith(".")) { 
     document.getElementById("message").innerHTML="The sentence is valid.";
    }else{
         document.getElementById("message").innerHTML="The sentence is invalid. Please end with a period.";}
       
}

// adding event listener to the form
const form= document.getElementById("putsentence");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the form from submitting
    analyzeSentence(); // call the function to analyze the sentence
});
