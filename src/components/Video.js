import React from "react";


export default function Video() {
  // Get the video
  var video = document.getElementById("myVideo");

  // Get the button
  var btn = document.getElementById("myBtn");

  // Pause and play the video, and change the button text
  function myfnc() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
  return (
    <>
      <div class="newvideocnt " style={{width:"100vw"}}>
        <Video muted autoPlay controls loop id="myVideo">
          <source src="" />
        </Video>

        {/* <!-- Optional: some overlay text to describe the video --> */}

        <div class="content">
          <h1>
            <a href="https://www.instagram.com/kendalljenner/" class="linktext">
              Kendell Jenner
            </a>
          </h1>

          {/* style="padding-left: 20px;padding-right: 20px; font-size: 100%; */}
          <p style={{paddingLeft:"20px",paddingRight:"20px",fontSize:"100%"}}>
            Kendall Nicole Jenner (born November 3, 1995)[3] is an American
            model, media personality, socialite and businesswoman. She is a
            daughter of Kris Jenner and Caitlyn Jenner, and rose to fame in the
            reality television show Keeping Up with the Kardashians, in which
            she starred for 20 seasons and nearly 15 years from 2007 to 2021.
            The success of the show led to the creation of multiple spin-off
            series including Kourtney and Khloe Take Miami (2009), Kourtney and
            Kim Take New York (2011), Khloe & Lamar (2011), Rob & Chyna (2016)
            and Life of Kylie (2017).
          </p>
          {/* <!-- Use a button to pause/play the video with JavaScript --> */}
          <button id="myBtn" onclick="myfnc()">
            Pause
          </button>
        </div>
      </div>
    </>
  );
}
