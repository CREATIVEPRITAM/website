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

  async function createdata() {
    var gettitle = document.getElementById("title").value;
    var getauthor = document.getElementById("author").value;
    var getdescription = document.getElementById("description").value;
    var getchapterNo = document.getElementById("chapterNo").value;
    var geturlcoverimage = document.getElementById("urlcoverimage").value;
    var getreadingTime = document.getElementById("readingTime").value;
    // document.write("ha mera function chal raha he");

    var chapter = {
      title: gettitle,
      authorName: getauthor,
      briefDescription: getdescription,
      chapterNo: getchapterNo,
      coverImage: geturlcoverimage,
      estimatedReadingTime: getreadingTime,
    };
    let creatDataChapter = await firebase.firestore().collection("chapters").add(chapter);
    alert("User added with id: " + creatDataChapter.id);
    console.log(creatDataChapter);
  }