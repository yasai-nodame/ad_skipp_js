

const observer = new MutationObserver(mutations => {
    // 変化が発生したときの処理
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes'){
            const ad = document.querySelector('.ad-showing');
            if (ad) {
                const video = document.querySelector('video')
                console.log(video)
            }
        }
    }
})


observer.observe(target, {
    attributes: true,
    childList: true, 
    subtree: true
})