const express=require('express');
const multer=require('multer');
const cors=require('cors');
const fs=require('fs');
const ProductModel = require('./Model/Product.model');
const { mainModule } = require('./Model/Product.model');
const { connection } = require('./config/db');
const cloudinary=require('cloudinary').v2;
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT;


cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})


app.get('/', (req, res)=>{
    res.send('base url of multer and cloudinary...')
})


const storage=multer.memoryStorage();
const upload=multer({storage})


app.post('/addDetail', async(req, res)=>{
    const {price, name, description, imgurl}=req.body;
    const newItem=new ProductModel({price, name, description,imgurl})
    try{
      await newItem.save();
      res.send({msg:'added successfully....'})
    }catch(err){
      console.log(err)
      res.send('Error unable to upload product')
    }
})

app.post('/upload', upload.single('Image'), async(req, res)=>{
    try{
        console.log(req.file.buffer);
        const fileBuffer = req.file.buffer;
        //cloudinary upload process
        // ---------- unique public id creation ---------
        const timestamp = new Date().getTime(); 
        const uniqueId = Math.floor(Math.random()*100000); 
        const publicId = `image_${timestamp}_${uniqueId}`; 

        cloudinary.uploader.upload_stream({
          public_id: publicId,  // This public_id should be unique each time so that the old image don't get replace with new one in cloudinary media library.
        },
        (err, result) => {
          if (err) throw err;
          console.log(result);
          return res.status(201).send({ message: "File uploaded successfully", url: result.url });
        })
        .end(fileBuffer);
  }catch(error) {
    res.json({ message: "Error: " + error.message });
  }
});


app.listen(PORT, async()=>{
  try{
    await connection;
    console.log(`listening on port ${PORT}`)
  }
   catch(err){
    console.log('unable to connect to db')
   }
})

