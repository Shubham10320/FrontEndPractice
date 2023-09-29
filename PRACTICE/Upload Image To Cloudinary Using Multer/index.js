const multer=require('multer');
const express=require('express');
const app=express();


const storage=multer.diskStorage({
    destination: './upload/',
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}_avatar`,)
    }
})

const upload=multer({storage:storage})

app.get('/', (req, res)=>{
    res.send('base url')
})

app.post('/upload', upload.single('file'), (req, res)=>{
    console.log(req)
})

app.listen(3001, ()=>{
    console.log('listening on port 3001')
})
