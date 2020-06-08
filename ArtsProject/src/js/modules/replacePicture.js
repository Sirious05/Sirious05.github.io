const replacePicture = () => {
    function bindReplacePicture(blocksSelector) {
        const blocks = document.querySelectorAll(blocksSelector);

        function showPicture(block) {
            const img = block.querySelector('img');
            img.src = img.src.slice(0, -4) + '-1' + '.png';
            block.querySelectorAll('p').forEach(item => {
                item.style.display = 'none';
                if (item.classList.contains('sizes-hit')) {
                    item.style.display = 'block';
                }

            });
        }

        function hidePicture(block) {
            const img = block.querySelector('img');
            img.src = img.src.slice(0, -6) + '.png';
            block.querySelectorAll('p').forEach(item => {
                item.style.display = 'block';
            });
        }
        blocks.forEach(block => {
            block.addEventListener('mouseover', () => {
                showPicture(block);
            });
            block.addEventListener('mouseout', () => {
                hidePicture(block);
            });
        });
    }
    bindReplacePicture('.sizes-block');
};
export default replacePicture;