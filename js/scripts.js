

console.log('ok')

/************
* Where is the data (api feed)? 
************/
// The API feed
const getStuff = 'https://opentdb.com/api.php?amount=10&category=25&type=multiple';

/************
* Show the Data
************/ 
// Show the data
const showStuff = (data) => {
    
  // Check the data   
  console.log(data);
  // How much data is there?
  console.log(data.length);
  // How do you access a single data entry? 
  console.log(data[0]);
  
  // Show single entry, then repeat (loop-through) one-at-a-time 
  for (i=0; i < data.results.length; i++) { 
     
    
      // Template for data. Have fun. Be a Designer.
      // jQuery for easy DOM manipulations: `text()`, `attr()`, `addClass()`, etc. 
           // Template.
      let template =
          `
<aside> 
           <section class="question">
            <p>${data.results[i].question}</p>
          
</section>
 <section class="answer">

     <p class="animation">${data.results[i].correct_answer}</p>
           </section>

</aside> `; 
    
 
    
      // Show Data Within Template.
      $('#app').append(template);
    
  } // End of Loop.
    
}; // End of 'showStuff' Function.

// JSON From API. 
$.getJSON( getStuff, showStuff);