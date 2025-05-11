document.addEventListener('DOMContentLoaded', function() {
    const videoButton = document.getElementById('videoButton');
    const myVideo = document.getElementById('myVideo');
    let isPlaying = false;

    if (videoButton && myVideo) {
        videoButton.addEventListener('click', function() {
            if (isPlaying) {
                myVideo.pause();
                videoButton.innerHTML = '▶';
                myVideo.style.width = '0';
                myVideo.style.height = '0';
            } else {
                myVideo.play()
                    .then(() => {
                        videoButton.innerHTML = '⏸';
                        myVideo.style.width = '300px';  // Ajuste conforme necessário
                        myVideo.style.height = 'auto';
                    })
                    .catch(error => {
                        console.error("Erro ao reproduzir vídeo:", error);
                    });
            }
            isPlaying = !isPlaying;
        });
    }
});