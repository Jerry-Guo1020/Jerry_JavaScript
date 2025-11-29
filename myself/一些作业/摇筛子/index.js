function handle() {
    const numInput = document.getElementById('numInput').value
    const resultNum = document.getElementById('resultNum')
    const resultImage = document.getElementById('resultImage')
    const values = []
    const image = []

    for (let i = 0; i < numInput; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        console.log(value)
        values.push(value)
        image.push(`<img src="./image/${value}.png">`)
    }

    resultNum.textContent = `dice: ${values.join(',')}`
    resultImage.innerHTML = image.join('')
}