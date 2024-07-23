const target = document.querySelector('.ad-showing')

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
            }
        }
    }
})


observer.observe(target, {
    attributes: true,
    childList: true, 
    subtree: true
})