const express=require('express');
const multer=require('multer');
const cors=require('cors');
const fs=require('fs');
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT;



const storage=multer.diskStorage({
    destination:function(req, file, cb){
        const uploadFolder = `${__dirname}/upload`;
        if(!fs.existsSync(uploadFolder)){
           fs.mkdirSync(uploadFolder)
        }
        cb(null, uploadFolder);
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + Date.now() + '.jpg');
    }
})



const upload = multer({storage:storage});

app.get('/', (req, res)=>{
    res.send('Base url');
})

app.post('/upload', upload.single('Image'), (req, res)=>{
    res.send({msg:"File Upload Successfully..."})
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
