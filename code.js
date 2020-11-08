var allPages
var binPage

// Find all pages
allPages = figma.root.findAll(node => node.type === "PAGE")

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

// Move selection to Bin
if (figma.currentPage.selection.length == 0) {
    figma.closePlugin("👆  Please make a selection")
  } else {
    for (const node of figma.currentPage.selection) {
        // const frame = figma.createFrame()
        // frame.name = "Deleted"
        // frame.appendChild(node)
        binPage.appendChild(node)
    }
    figma.currentPage.selection = []
    figma.closePlugin("🗑  Moved to Bin")
}

figma.closePlugin()