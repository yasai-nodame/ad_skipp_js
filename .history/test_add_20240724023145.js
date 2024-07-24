const target = document.querySelector('.ad-showing')

console.log(target) // ad-showingが含まれたクラス名が出力される。 つまり広告クラス？

const config = { attributes: true, childList: true, subtree: true} 

const callback = function  (mutationsList, observer) {
    for (const mutation of mutationsList) {
        console.log(mutation.type)
    }
}