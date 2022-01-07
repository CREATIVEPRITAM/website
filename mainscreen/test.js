function loadShortQuestions(){
    var finalText = "";
    for(var i=1;i<=10;i++){
        var innerSlideText = `<div class="swiper-slide">
        <div class="container-fluid mt-1 pt-5">
        <div class="row">
          <div class="col backbutton d-flex align-items-center ">
            <i class="fas fa-long-arrow-alt-left text-white fa-2x " onclick="backToTheChapter()"></i>
           <span style="margin-left: 10px; color: white; ">Back</span>  
          </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <video width="100%" height="240" controls>
                    <source src="video.mp4" type="video/mp4">
                </video>
            </div>   
        </div>
        <div class="row">
            <div class="col d-flex align-items-center question p-2 mt-1">
                <h4>1. Who is the lancho and his father name ?</h4>
            </div>   
        </div>
        <div class="row content">
            <div class="col splitbutton pt-2">
                <button>Hindi</button>
                <button>English</button>
            </div>
            <div class="col ansswer pt-5 px-4 pb-3">
               <p>lancho was a poor farmer and Revolutionize the way you work with 3D applications.
                    Pan, zoom and rotate the model or camera as if you're holding
                    it in your hand. It's a level of control that's simply not possible </p> 
            </div>   
        </div>
    
        </div>`;
        finalText += innerSlideText;
    }
  console.log("ha chal rha he");
document.getElementsByClassName('swiper-wrapper')[0].innerHTML = finalText;
}