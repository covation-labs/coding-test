//script for pop youtube video

const showVideoDiv = () => {
    let videoDiv = document.querySelector('.video-div');
    if (videoDiv.style.display === "none") {
        videoDiv.style.display = "block";
    } else {
        videoDiv.style.display = "none";
    }
}