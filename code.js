var allPages
var binPage

// Find all pages
var allPages = figma.root.findAll(node => node.type === "PAGE")

// Checking pages names
for (let index in allPages) {
    let page = allPages[index];
    if (page.name == "🗑  Bin") {
        binPage = page
        console.log("You already have Bin page")
    }
}

// Create a Bin page
if (binPage == undefined) {
    var a = figma.createPage()
    a.name = "🗑  Bin"
}

figma.closePlugin()