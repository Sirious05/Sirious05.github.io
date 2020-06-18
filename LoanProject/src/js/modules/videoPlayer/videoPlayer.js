class VideoPlayer {
    constructor(triggers, popup) {
        try {
            this.triggers = document.querySelectorAll(triggers);
            this.popup = document.querySelector(popup);
        } catch (e) {}
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
                if (this.player) {
                    this.player.pauseVideo();
                }
            }
        });
    }
    showModal() {
        this.triggers.forEach((btn, i) => {
            try {
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;
                blockedElem.setAttribute('data-disabled', 'true');
            } catch (e) {}
            btn.addEventListener('click', () => {
                this.activeBtn = btn;
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    if (document.querySelector('iframe#frame')) {
                        this.popup.style.display = 'flex';
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');
                            if (this.player) {
                                this.player.loadVideoById({
                                    videoId: this.path
                                });
                            }
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
                }
            });
        });
    }
    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this)
            }
        });
    }
    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
            if (state.data === 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').appendChild(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'play video';
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = 'none';
                    blockedElem.setAttribute('data-disabled', 'false');
                }
            }
        } catch (e) {}
    }
    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    render() {
        try {
            this.hideModal();
            this.showModal();
            this.init();
        } catch (e) {}
    }
}
export default VideoPlayer;