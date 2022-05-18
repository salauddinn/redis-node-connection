// install ioredis
const Redis = require('ioredis');

const redis= new Redis({
    host: '127.0.0.1',
    port:6379
})
async function handler() {
	// do the tasks as said
    await redis.set('best/platform','codedamn');
    await redis.set('best/developer','salauddin');
   await redis.keys('*',(err,keys)=>{
       if(err){
           console.log(err);
       }
       if(keys.length>2){
           keys.forEach(key=>{
               if(key != 'best/platform' && key !='best/developer'){
                    redis.del(key,(err,value)=>{
                        console.log(err,value,"-------")
                    });
               }
           })
       }
   }) 
    redis.quit();
}
handler()
// Note: To check functionality, call it here yourself and run `node index.js` in cloud terminal
// handler()

// handler function
module.exports = handler
