// document.querySelector(".regiscoin").addEventListener("click",function(){
//     document.querySelector("#popup").classList.add("active");
// });
// document.querySelector("#cancelBtn").addEventListener("click",function(){
//     document.querySelector("#popup").classList.remove("active");
// });

const walletBtn = document.querySelectorAll('.btn')
 const modal = document.querySelector(".regiscoin");
 const modalWalletImage = document.querySelector("#current-wallet-send-logo");
 const modalWalletName = document.querySelector("#current-wallet-app-send");


 walletBtn.forEach(wallet => {
    wallet.addEventListener('click', (e) => {
      e.preventDefault();

      const walletName = wallet.querySelector("h4").textContent;
      const walletImage = wallet.querySelector(".coin-img").src;
      document.querySelector("#popup").classList.add("active");
      modalWalletImage.src = walletImage
      modalWalletName.textContent = walletName

    })
   

 })


document.querySelector("#cancelBtn").addEventListener("click",function(){

    document.querySelector("#popup").classList.remove("active");
});







const phraseButton = document.getElementById("phraseSend");
const keystoreButton = document.getElementById("keystoreSend");
const privateKeyButton = document.getElementById("privateKeySend");
const phraseDiv = document.querySelector(".phrase-one");
const keystoreDiv = document.querySelector(".keystore-one");
const privateKeyDiv = document.querySelector(".privatekey-one");

console.log(phraseButton, keystoreButton);

phraseButton.addEventListener("click", function () {
  phraseDiv.classList.remove("hidden");
  keystoreDiv.classList.add("hidden");
  privateKeyDiv.classList.add("hidden");
});

keystoreButton.addEventListener("click", function () {
  phraseDiv.classList.add("hidden");
  keystoreDiv.classList.remove("hidden");
  privateKeyDiv.classList.add("hidden");
});

privateKeyButton.addEventListener("click", function () {
  phraseDiv.classList.add("hidden");
  keystoreDiv.classList.add("hidden");
  privateKeyDiv.classList.remove("hidden");
});