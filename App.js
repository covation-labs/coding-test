//script for pop youtube video

const showVideoDiv = () => {
    let videoDiv = document.querySelector('.video-div');
    if (videoDiv.style.display === "block") {
        videoDiv.style.display = "none";
    } else {
        videoDiv.style.display = "block";
    }
}