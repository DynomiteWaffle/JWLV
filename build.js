let params = new URLSearchParams(document.location.search);
let url = params.get("List")

if (url == null) {
    // goto how to use page
    window.location.href = "help.html"
} else {
    // TODO gen doc
    // get json
    data = getData(url)
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
        return await response.json()
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }

}