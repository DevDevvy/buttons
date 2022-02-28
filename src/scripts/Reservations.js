import { getRequests, deleteRequest, getEmplyees, getFinished, sendFinished } from "./dataAccess.js"

const clowns = getEmplyees()
// make a function that builds the party html list
export const ReservationsHTML = () => {
    const clowns = getEmplyees()
    let html = "<ul>"
    const list = getRequests()
    const reservationList = list.map(res => {
        return `
    <li class="reservations" name="reservations">
    A party of ${res.children} children. 
    Child's name: ${res.child}, Parent's name: ${res.parent} 
    party on ${res.date} for ${res.length} hours.</li>

        <button id="deny--${res.id}" >DENY</button>

        <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${
            clowns.map(
                clown => {
                    return `<option value="${clown.id}--${res.id}">${clown.name}</option>`
                }
            ).join("")
        }
    </select>`
    }).join("")
    html += reservationList
    html += "</ul>"
    return html
}

const mainContainer = document.querySelector("#container")

// click listener for delete button calls deleteRequest
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("deny--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})



mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {

            const [clownId, resId] = event.target.value.split("--")

            const completion = {
                clownId: clownId,
                reservation: resId
            }
            sendFinished(completion)
        }
    }
)
// iterate through finished and return interpolated string with info
export const CompletionsHTML = () => {
    const finished = getFinished()
    let html = "<ul>"
    const finishedList = finished.map(res => {
        return `<li class="reservations" name="reservations">
        <em>FINISHED</em>A party of ${res.children} children. 
        Child's name: ${res.child}, Parent's name: ${res.parent} 
        party on ${res.date} for ${res.length} hours.</li>`
    })
    // concatenate html and list and then add ul ending tag
    html += finishedList
    html += "</ul>"
    return html
}