import { sendRequest } from "./dataAccess.js"
import { getRequests } from "./dataAccess.js"

const requests = getRequests()


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="numberOfChildren">Number of Children</label>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="customerAddress">Address</label>
            <input type="text" name="customerAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLength">How long is the party?</label>
            <input type="number" name="serviceLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="parentName">Name of Parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Name of Child</label>
            <input type="text" name="childName" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

// event listener listening for click submit
// query select all input fields to get values
// create an object from user input
// send data to API for storage 
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const numberOfChildren = document.querySelector("input[name='numberOfChildren']").value
        const customerAddress = document.querySelector("input[name='customerAddress']").value
        const serviceLength = document.querySelector("input[name='serviceLength']").value
        const serviceDate = document.querySelector("input[name='serviceDate']").value
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        
        


        // Make an object out of the user input
        const dataToSendToAPI = {
            children: numberOfChildren,
            address: customerAddress,
            length: serviceLength,
            date: serviceDate,
            parent: parentName,
            child: childName,
            
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }

})

