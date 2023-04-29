import React from "react";
import icon from "./chatgpt-icon.png"
import "./home.css"
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

import Nav1 from "./Navbar";
const Home=()=>{
    return(
<>

<div id="sk" className="maindiv" > 
<Nav1/>
<div  style={{paddingTop:'190px'}}>
<nav id="cards1"  class=" pb-1 navbar navbar-light  justify-content-center bg-transparent">
  <div style={{padding:'80px'}}  class="container-fluid  text-center justify-content-center">
    <span id="maintext" style={{fontSize:'7vw'}} class="navbar-brand  mb-0 justify-content-center wow animate__animated animate__flipInX animate__delay-1s ">LEARN EVERY THING ABOUT AI</span>  <span style={{fontSize:'50px'}} className="up text-light  me-5" >SCROLL   
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-arrow-down-square-fill text-light ms-4 pb-2" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg>
     </span>
    

  </div>
</nav>
</div>

</div>
<nav id="chatgpt" class=" pb-1 navbar navbar-light  justify-content-center bg-transparent">
  <div  class="container-fluid  text-center justify-content-center">
    <span id="maintext" style={{fontSize:'7vw'}} class="navbar-brand  mb-0 justify-content-center wow animate__animated animate__flipInX animate__delay-1s ">What is CHATGPT AI?</span>
  </div>
</nav>


<div className="container fluid text-center ">


<iframe width="100%" height="315" src="https://www.youtube.com/embed/hGhICFNv57g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>

<div className="2nd mt-5 mb-5">
    <div className="container-fluid row justify-content-center ">
        <div className="col-md-5 text-center justify-content-center mt-5 mb-5">
<img id="chaticon" className="wow animate__animated animate__flipInX animate__delay-1s  " style={{height:'200px',width:'200px'}} src={icon} alt="" />

        </div>
        <div className="col-md-5 text-center text-light  wow animate__animated animate__flipInX animate__delay-1s  ">
<div  className="gptheading h1  ">CHATGPT AI</div>
<div className="gptcontent f4-2 text-start">ChatGPT is a powerful artificial intelligence bot developed by OpenAI. Its makers Altman, Musk, and other Silicon Valley investors created an artificial intelligence research non-profit organization in 2015 and unveiled it to the world on 30th November 2022. ChatGPT is Chat Generative Pre-Trained Transformer. It is a powerful AI bot that is capable of understanding human speech and producing in-depth writing that is easily understood by humans. The question-answer format use in ChatGPT makes it interesting. </div>
        <a  href="https://chat.openai.com/"  > 
        <Button className="mt-3" variant="contained" endIcon={<SendIcon />}>
  USE CHATGPT
</Button>
      
         </a>
        </div>

    </div>
</div>




{/* propting */}
<nav id="chatgpt" class=" pb-1 navbar navbar-light text-light justify-content-center bg-transparent">
  <div class="container-fluid text-light text-center justify-content-center">
    <span id="maintext" style={{fontSize:'7vw'}} class="navbar-brand  mb-0 justify-content-center wow animate__animated animate__flipInX animate__delay-1s ">What is Prompting?</span>
  </div>
</nav>

<div className="container fluid">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/6eul1pfGKwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className="2nd mt-5 pt-5 mb-5">
    <div className="container-fluid row justify-content-center ">
       
        <div className="col-md-9 text-center text-light  wow animate__animated animate__flipInX animate__delay-1s  ">

<div  className="gptcontent f4-2 text-start">
Generative AI models primarily interact with the user through textual input. Users can instruct the model on the task by providing a textual description. What users ask the model to do in a broad sense is a “prompt”. “Prompting” is how humans can talk to artificial intelligence (AI). It is a way to tell an AI agent what we want and how we want it using adapted human language. A prompt engineer will translate your idea from your regular conversational language into clearer and optimized instructions for the AI.
   </div>
   <div className="prompt-ul mt-5 ms-5 text-start">
    <ul>
      <li className="my-3" >By providing a specific prompt, it’s possible to guide the model to generate output that is most relevant and coherent in context.</li>
      <li  className="my-3"   >Prompting allows users to interpret the generated text in a more meaningful way.</li>
      <li className="my-3" >Prompting is a powerful technique in generative AI that can improve the quality and diversity of the generated text.</li>
      <li className="my-3" >Prompting increases control and interpretability, and reduces potential biases.</li>
      <li className="my-3" >Different models will respond differently to the same prompting, and understanding the specific model can generate precise results with the right prompting.</li>
      <li className="my-3" >Generative models may hallucinate knowledge that is not factual or incorrect. Prompting can guide the model in the right direction by prompting it to cite correct sources.</li>
      
      

    </ul>
   </div>
        </div>

    </div>
</div>


<nav id="chatgpt" class=" pb-1 navbar navbar-light text-light justify-content-center bg-transparent">
  <div class="container-fluid text-light text-center justify-content-center">
    <span id="maintext" style={{fontSize:'5vw'}} class="navbar-brand  mb-0 justify-content-center wow animate__animated animate__flipInX animate__delay-1s ">USE TYPES OF AI FOR DIFFERENT PUSPOSE.</span>
  </div>
</nav>

<div style={{paddingBottom:'60px'}} className="2nd  mb-5">
    <div className="container-fluid row justify-content-center ">
        
        <div className="col-md-9 text-start text-light wow animate__animated animate__fadeInRight  ">
<div className="gptheading h1  ">  Reactive AI</div>
<div className="gptcontent f4-2 ">

The most basic type of artificial intelligence is reactive AI, which is programmed to provide a predictable output based on the input it receives. Reactive machines always respond to identical situations in the exact same way every time, and they are not able to learn actions or conceive of past or future. Examples of reactive AI include: Deep Blue, the chess-playing IBM supercomputer that bested world champion Garry Kasparov Spam filters for our email that keep promotions and phishing attempts out of our inboxes The Netflix recommendation engine Reactive AI was an enormous step forward in the history of artificial intelligence development, 
  
   </div>
   <div className="gptheading h1 mt-5 ">Limited memory AI</div>
<div className="gptcontent f4-2 ">
Limited memory AI learns from the past and builds experiential knowledge by observing actions or data. This type of AI uses historical, observational data in combination with pre-programmed information to make predictions and perform complex classification tasks. It is the most widely-used kind of AI today.
   </div>
   <div className="gptheading h1 mt-5 ">Self aware AI</div>
<div className="gptcontent f4-2 ">
The most advanced type of artificial intelligence is self-aware AI. When machines can be aware of their own emotions, as well as the emotions of others around them, they will have a level of consciousness and intelligence similar to human beings. This type of AI will have desires, needs, and emotions as well.
   </div>
   
        <NavLink id="lastbtn" to="/useai" style={{marginBottom:'70px'}} className="btn btn-light w-100 mt-5 fs-3 fw-bold mb-5" > CLICK HERE TO USE AI </NavLink>
        </div>

    </div>
</div>


</>

    )
}
export default Home;