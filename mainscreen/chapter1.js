var data = `India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest country by area India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest country by area
            India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest country by area India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest country by area
            India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest country by area India officially the Republic of India is a 
            country in South Asia. It is the seventh-largest country by area`;

      var wordList= data.split(" "); //['indian','office']
      var finalWords ="";
      for( var i=0;i<wordList.length;i++){
        var singleWord = `<span onclick="getWordHint(event)" style="cursor:pointer;"> ${wordList[i]} </span>`
        finalWords = finalWords +singleWord;
        console.log(finalWords);
      }
      var currentURLTitle = decodeURI(window.location.href.split("=")[1]);
     // alert(currentURLTitle);
      document.getElementById("chapter-title").innerText = currentURLTitle;
      document.getElementById("clickable-word").innerHTML = finalWords;

      function getWordHint(event) {
        var word = event.target.innerText.trim(); //trim means whitespaces removal from left and right from string
        var iframeCode = `<iframe scrolling="no" src="https://dict.hinkhoj.com/shabdkhoj.php?word=${word}&ie=UTF-8"
         style="border:0px none ;margin-left: 0px; height: 859px; margin-top: -440px; width: 400px;margin-bottom:-300px">
            </iframe>`;
          document.getElementById("modalBody").innerHTML = iframeCode;
        var wordHintModal = new bootstrap.Modal(document.getElementById('word-hint'));
        wordHintModal.show();
        video.pause();
      document.getElementById("maincontainer").classList.remove("fixed-top");
      }

      function hideModal(){
        document.getElementById('word-hint').style.display='none';
        document.getElementsByClassName("modal-backdrop")[0].removeAttribute('class'); 
        video.play(); 
      }

      function backToTheChapter() {
        window.location.replace(`index.html`);
      }