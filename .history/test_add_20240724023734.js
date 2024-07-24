const target = document.querySelector('.ad-showing')

console.log(target) // ad-showingが含まれたクラス名が出力される。 つまり広告クラス？

const config = { attributes: true, childList: true, subtree: true} 

const observer = new MutationObserver(mutations => {
    // 変化が発生したときの処理
    for (const mutation of mutations) {
        console.log(mutation)
    }
})


observer.observe(target, {
    attributes: true,
    childList: true, 
    subtree: true
})