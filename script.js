const btn360 = document.querySelector("#btn-360")
const product = document.querySelector(".product-preview")

let isPreview360Activated = false

function toggleProductPreview() {
    
    if(!isPreview360Activated) {
        product.src = "./assets/imagens/sofa-360.gif"
        btn360.src = "./assets/imagens/btn-close.svg"
        isPreview360Activated = true
    } else {
        product.src = "./assets/imagens/sofa.png"
        btn360.src = "./assets/imagens/btn-360.svg"
        isPreview360Activated = false
    }
}



btn360.addEventListener("click", toggleProductPreview)