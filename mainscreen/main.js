const firebaseConfig = {
    apiKey: "AIzaSyDHDyrJug7JlaMwm0hlYiUCUIoSnH9RoTs",
    authDomain: "learn-english-c4266.firebaseapp.com",
    projectId: "learn-english-c4266",
    storageBucket: "learn-english-c4266.appspot.com",
    messagingSenderId: "392155195454",
    appId: "1:392155195454:web:3ae10029739dee373dc96f",
    measurementId: "G-7111BZC333",
  };

  firebase.initializeApp(firebaseConfig);

  var divisready = document.getElementsByClassName("row")[0];
  function createChapterCards(chapterData) {
    return cardData;
  }

  // firebase
  //   .firestore()
  //   .collection("chapters")
  //   .doc("SF")
  //   .onSnapshot((doc) => {
  //     console.log("Current data: ", doc.data());
  //   });

  var chapters = [];

  async function onloadFunction() {
    let chaptersFromFireStore = await firebase
      .firestore()
      .collection("chapters")
      //.where("title", "==", "The Last Lesson")
      .orderBy("chapterNo", "asc")
      .get();

    chaptersFromFireStore.forEach((singleChapterSnapShot) => {
      //snapshot = (id +data())
      var singleChapterDataId = singleChapterSnapShot.id;
      var singleCardData = singleChapterSnapShot.data();
      chapters.push(singleCardData);
    });

    console.log("hamra aray", chapters);
    makeCards(chapters);
  }

  function makeCards(chapters) {
    var mainChapterContainer = document.getElementById("main-chapter-container");
    mainChapterContainer.innerHTML = "";
    chapters.forEach((singleCardData) => {
      var newUpdatedCardHTMLString = `<div class="cordOfContent" onclick = "gotoVideo(this)">
      <div class="row px-2">
        <div class="col-sm-12 " style="border-bottom: 1px solid lightgray">
          <h6>${singleCardData.chapterNo} - ${singleCardData.title}</h6>
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-4 py-2">
          <img
            class=" img-fluid img-thumbnail"
            src=${singleCardData.coverImage}  class="rounded mx-auto d-block"/>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col pl-5 " style="height: 150px; overflow-y:hidden;">
              <span style="font-size: 15px">${singleCardData.briefDescription}...</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row px-2 ">
        <div class="col-12">
          <div class="row pt-2 border border-top-1 border-end-0 border-start-0 border-bottom-0">
            <div class="col">
              <i class="fas fa-user" style="color:blue; margin-right:5px;"></i>
              <span> ${singleCardData.authorName}</span>
            </div>
            <div class="col" style="height: 50%">
              <i class="fas fa-clock" style="color:blue; margin-right:5px;"></i>
              <span>${singleCardData.estimatedReadingTime}</span>
            </div>
          </div>  
        </div>    
    </div> 
    </div>`;
      mainChapterContainer.innerHTML = mainChapterContainer.innerHTML + newUpdatedCardHTMLString;
    });
  }
  function searchTask(event) {
    console.log(event);
    var searchValue = event.target.value;
    var modifiedChapters = [];
    for (var i = 0; i < chapters.length; i++) {
      var singleChapterData = chapters[i];
      if (
        singleChapterData.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1 ||
        singleChapterData.briefDescription.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
      ) {
        modifiedChapters.push(singleChapterData);
      }
    }
    makeCards(modifiedChapters);
  }

  function gotoVideo(that) { //event.target == this
    var clickedElement = that;
    var chaperTitle = clickedElement.children[0].children[0].children[0].innerText;
    //window.location.replace(`chapterDetails.html?chapterName=${chaperTitle}`); 
    window.location.replace(`index.html`); 
  }