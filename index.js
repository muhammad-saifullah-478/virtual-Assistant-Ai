let a=document.getElementById("btn")
let content=document.getElementById("content")
let voice=document.getElementById("voice")

function speak(text){

    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
let day=new Date()
let hours=day.getHours()
if(hours>=0 && hours<12){
    speak("God morening")
}
else if(hours>=12 && hours<16){
    speak("Good After Noon sir")
}else{
    speak("Good Morning sir")
}


}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
let recogntion=new speechRecognition()
recogntion.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=>{
recogntion.start()
btn.style.display="none"
voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

if(message.includes("hello")){
    speak("Hellow sir;I can helep you?")
}
else if(message.includes("who are you")||message.includes("ap ko kis niy bnia")){
    speak("I am Virtual Assistant created by Muhammad saifullah")
}
else if(message.includes("open youtube")){
    speak("opning youtube")
    window.open("https://www.youtube.com")
}
else if(message.includes("open linkedin")){
    speak("opning LinkedIn")
    window.open("https://www.linkedin.com")
}
else if(message.includes("open Facebook")){
    speak("opning Facebook")
    window.open("https:/www.facebook.com")
}
else if(message.includes("open chat gpt")){
    speak("opning chatgpt")
    window.open("https:/www.chatgpt.com")
}
else if(message.includes("open google")){
    speak("opning google")
    window.open("https:/www.google.com")
}
else if(message.includes("open instagram")){
    speak("opning instagram")
    window.open("https:/www.instagram.com")
}
else if(message.includes("open calculator")){
    speak("opning calculator")
    window.open("calculator://")
}
else if(message.includes("open setting")){
    speak("opning setting")
    window.open("settings://")
}
else if(message.includes("what is time")){
    let time =new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
else if(message.includes("date")){
    let date =new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
}
else{
speak(`Did you get the result you asked for ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
}

}