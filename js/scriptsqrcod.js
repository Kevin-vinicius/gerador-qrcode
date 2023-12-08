const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form Input")


const qrCodeImg = document.querySelector("#qr-code img")
// Eventos

let timeGenerateQrCode = true

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

   if(!qrCodeInputValue || !timeGenerateQrCode) return;

   timeGenerateQrCode = false
   qrCodeBtn.innerText = "Gerando código...";

   qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

   
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("ativo");
        qrCodeBtn.innerText = "Código gerado!";
        setTimeout (() =>  {
            timeGenerateQrCode = true
        }, 1000)
    })

   
}

    

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})


qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter"){
        generateQrCode();
    }
    
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value);
    container.classList.remove("ativo");
    qrCodeBtn.innerText = "Gerar QR Code"
})