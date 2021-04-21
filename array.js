let cabTypes=["micro","mini","prime"];
console.log(cabTypes);
for(let i=0;i<cabTypes.length;i++){
    let type=cabTypes[i];
    console.log("["+i+"]"+type);
}
console.log("Number of cabtypes",cabTypes.length);
console.log("Contains",cabTypes.includes("micro"));
