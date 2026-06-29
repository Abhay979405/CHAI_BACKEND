import express from 'express'
const app=express()

app.get('/',(req,res)=>{
    res.send('server is ready');
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
  {
    id: 1,
    joke: "Teacher: Tumhari copy kahan hai? Student: Sir, wo to copy-paste ho gayi!"
  },
  {
    id: 2,
    joke: "Pappu: Doctor sahab, mujhe bhoolne ki bimari hai. Doctor: Kab se? Pappu: Kab se kya?"
  },
  {
    id: 3,
    joke: "Wife: Tum mujhe kabhi surprise kyu nahi dete? Husband: Theek hai, tum pregnant ho!"
  },
  {
    id: 4,
    joke: "Boss: Tum late kyu aaye? Employee: Sir, sapne me office aa gaya tha, socha overtime ho gaya!"
  },
  {
    id: 5,
    joke: "Friend: Tumhe pata hai duniya gol hai? Pappu: Haan, isliye to ghoomti rehti hai!"
  }
];
  res.send(jokes)

})

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log('server are runing at localhost ${port}')
})