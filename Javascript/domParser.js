const contentStringHTLM = `
	<body>
	    <p>This part don't show anything in this the document. Open the navigator console!</p>
	    <p>This part don't show anything in this the document. Open the navigator console!</p>
	    <p>This part don't show anything in this the document. Open the navigator console!</p>
	    <p>This part don't show anything in this the document. Open the navigator console!</p>
	    <p>This part don't show anything in this the document. Open the navigator console!</p>
	</body>
`;

const ps = new DOMParser().parseFromString(contentStringHTLM, "text/html").getElementsByTagName('p');

console.log("Content", contentStringHTLM);
console.log("ps", ps);
 
for (let p of Array.from(ps)) {
    console.log(p);
}