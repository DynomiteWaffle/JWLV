let params = new URLSearchParams(document.location.search);
let url = params.get("List")

if (!url == '') {
    // remove help section - not needed if user used
    const helpElement = document.getElementById("Help")
    helpElement.remove()
    // TODO gen doc
    // get json
    // TODO fix cors errors
    // temp use litterbox - returns proper
    data = getData(url)
    // TODO ACctualt GET THYE DANG DATA
    console.log(data)
    console.log(Object.values(data))
    // loop trough items + make them
}

function makeItem() {

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