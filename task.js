const Name=prompt("Enter your name");
const fixedText = Name[0]+ "." + Name.slice(1);

for( let i=3; i<fixedText.length;i++){
    let text = fixedText.slice(0,i) + "." + fixedText.slice(i);
    console.log(text);
}