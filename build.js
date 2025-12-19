let params = new URLSearchParams(document.location.search);
let url = params.get("List")
const list = document.getElementById("List")
if (!url == '') {
    // remove help section - not needed if user used
    const helpElement = document.getElementById("Help")
    helpElement.remove()
    // TODO gen doc
    // TODO fix cors errors
    // temp use litterbox - returns proper

    // get json
    getData(url).then((data) => {
        const reuse = data.ReusedNotes
        console.log(reuse)
        // loop trough items + make them
        data.Items.forEach(element => {
            makeItem(element, reuse)
        });
    })

}

function makeItem(item, ReusedNotes) {
    let element = document.createElement("div")
    element.className = "ListItem"
    if (item.Priority == null) {
        element.style.order = Number.MAX_SAFE_INTEGER
    } else {
        element.style.order = item.Priority
    }
    let name = document.createElement("Text")
    name.innerHTML = item.Name
    name.onclick = function (event) {
        if (event.target.nextElementSibling.hidden) {
            event.target.nextElementSibling.hidden = false
        } else {
            event.target.nextElementSibling.hidden = true
        }
    }

    element.appendChild(name)
    let details = document.createElement("div")
    details.hidden = true

    details.appendChild(document.createTextNode("Here be dragons"))
    element.appendChild(details)



    list.appendChild(element)
}

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json()

    } catch (error) {
        console.error(error.message);
    }

}