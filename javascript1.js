	function reverseWordsInSentence(sentence) {
    	  const words = sentence.split(" "); 
    	  const reversedWords = [];
    	
    	  for (const word of words) {
    	    const reversedWord = reverseWord(word); 
    	    reversedWords.push(reversedWord);
    	  }
    	  return reversedWords.join(" "); 
    	}
    	
    	function reverseWord(word) {
    	  return word.split("").reverse().join(""); 
      }	  
        const inputSentence = prompt("Enter a sentence:"); 
    	const reversedSentence = reverseWordsInSentence(inputSentence);
    	console.log("Reversed sentence:", reversedSentence);
    