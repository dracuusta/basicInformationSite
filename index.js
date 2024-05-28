import http from 'http'
import url from 'url'
import path from 'path'
import fs from 'fs/promises'

const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


const server=http.createServer(async (req,res)=>{
    try{
        let filepath;
        if(req.url==="/"){
            filepath=path.join(__dirname,'index.html');
        }else if(req.url==="/about"){
            filepath=path.join(__dirname,"about.html")
        }
        else if(req.url==="/contact-me"){
            filepath=path.join(__dirname,"contact-me.html")
        }else{
            filepath=path.join(__dirname,'404.html');
        }

        const data=await fs.readFile(filepath);
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end();

    }catch(error){
        console.log(`${error}`);
    }
});


server.listen(8000,()=>{
    console.log(`server running on port 8000`);
})