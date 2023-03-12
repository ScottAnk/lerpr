export default function exportAsImage(element) {
    const canvas = element
    const image = canvas.toDataURL('image/png', 1.0)
    console.log(image)
    return image
    // downloadImage(image, fileName)
    // const generatedImage = document.createElement('img')
    // generatedImage.setAttribute('src', image)
    // document.querySelector('body').appendChild(generatedImage)
}