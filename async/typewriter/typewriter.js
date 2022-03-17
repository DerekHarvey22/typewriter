const sentence = "hello there from lighthouse labs \n";
let type = 0;
for (const char of sentence){
 setTimeout(() =>{
  process.stdout.write(char);
 }, type)
 type += 50
};