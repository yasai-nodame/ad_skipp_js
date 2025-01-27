const target = document.querySelector('.ad-showing')
console.log('target') // ad-showingが含まれたクラス名が出力される
console.log(target)


const observer = new MutationObserver(mutations => {
    // 変化が発生したときの処理
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes'){
            const ad = document.querySelector('.ad-showing');
            if (ad) {
                const video = document.querySelector('video')
                
                if (video) {
                    video.playbackRate = 16;
                    video.muted = true;
                    console.log('広告を検出し、16倍速で再生しています。');
                    const skipp_button = document.querySelector('.ytp-skip-ad-button');
                    skipp_button.click()
                    
                }
            }
        }
    }
})

// targetがnullかチェック
if (target) {
    observer.observe(target, {
        attributes: true, //属性変更
        childList: true, // 子要素変更
        subtree: true //子孫要素変更
    })
}




