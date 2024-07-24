const target = document.querySelector('.ad-showing')
console.log('target')
console.log(target) // ad-showingが含まれたクラス名が出力される。 つまり広告クラス？

const config = { attributes: true, childList: true, subtree: true} 

const observer = new MutationObserver(mutations => {
    // 変化が発生したときの処理
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes'){
            const ad = document.querySelector('.ad-showing');
            if (ad) {
                const video = document.querySelector('video')
                console.log(video) // videoタグ出力
                
                if (video) {
                    video.playbackRate = 16;
                    video.muted = true;
                    console.log('広告を検出し、16倍速で再生しています。');
                    const skipp_button = document.querySelector('.ytp-ad-skip-button-modern');
                    skipp_button.addEventListener('click', () => {
                        video.playbackRate = 1;
                        video.muted = false
                    });
                    
                }
            }
        }
    }
})


observer.observe(target, {
    attributes: true,
    childList: true, 
    subtree: true
})

// 広告スキップボタンがあるときは、取得してスキップ処理させる。
// もし広告が終わったらデフォルトに戻して再生させる。

//class="ytp-ad-text ytp-ad-skip-button-text-centered ytp-ad-skip-button-text"
//ytp-ad-skip-button-modern ytp-button


// 広告を早送りした後、普通の動画にuiが表示されなくなる問題