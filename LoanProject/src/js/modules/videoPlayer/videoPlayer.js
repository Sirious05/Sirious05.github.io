class VideoPlayer {
    constructor(triggers, popup) {
        this.triggers = document.querySelectorAll(triggers);
        this.popup = document.querySelector(popup);
    }
    hideModal() {
        this.close = this.popup.querySelector('.close');
        this.close.addEventListener('click', () => {
            this.popup.style.display = 'none';
            this.player.pauseVideo();
        });
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.popup.style.display = 'none';
                this.player.pauseVideo();
            }
        });
    }
    showModal() {
        this.triggers.forEach(item => {
            item.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.popup.style.display = 'flex';
                    this.popup.classList.add('animated', 'fadeInLeft');
                } else {
                    const path = item.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }
    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
    }
    init() {
        const tag = document.createElement('script');
        tag.src = "http://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    }
    render() {
        this.hideModal();
        this.showModal();
        this.init();
    }
}
export default VideoPlayer;