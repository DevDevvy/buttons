import { ButtonsHTML } from "./Buttons.js"
import { fetchEmployees, fetchFinishedJobs, fetchList, fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchEmployees()
        .then( 
            () => {
                return fetchRequests()})
        .then( 
            () => {
                return fetchFinishedJobs()})
        .then(
            () => {
                mainContainer.innerHTML = ButtonsHTML()
        }
    )
}

render()

// listener event that listens for state change to regenerate all HTML
mainContainer.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})