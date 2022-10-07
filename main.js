const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}
const computerHTMLMaker = (compObject) => {
	// Make some HTML to represent the dog
	const computerHTMLSection = `<section id ="computer--${compObject.id}"><h1>${compObject.manufacturer} ${compObject.make}</h1><div>Model: ${compObject.model}</div> <div>Memory: ${compObject.specs.memory} GB</div><div>Hard Drive Space: ${compObject.specs.hardDrive}</div><div>Processor speed: ${compObject.specs.processor} Ghz</div></section>`

	// Return the HTML
	return computerHTMLSection
}
const stringReturnedFromFunction = computerHTMLMaker(computer)

console.log(stringReturnedFromFunction)