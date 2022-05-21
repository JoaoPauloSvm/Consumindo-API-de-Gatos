const url = 'https://api.thecatapi.com/v1/images/search'    //url da api
let img = document.createElement('img')                     //criando a tag imagem
img.setAttribute('alt', 'Imagem de gatos')

const gerarGato = async () =>{
    try {
        document.body.appendChild(img)
        const response = await fetch(url)
        const result = await response.json()
        for(let i in result){
        img.setAttribute('src', result[i].url)
        console.log('Imagem gerada com sucesso!!')
        }     
    } catch (error) {
        console.log('Ocorreu algum erro inesperado!! ' + error)
    }
}