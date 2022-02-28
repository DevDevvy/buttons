
const API = "http://localhost:8088"

export const requestList = {
    requests: []
}

const employeeList = {
    employees: []
}

const finishedList = {
    finished: []
}

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                requestList.requests = serviceRequests
            }
        )
}

// -------export requests state---------
export const getRequests = () => {
    return requestList.requests.map(request => ({...request}))
}

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then(
            (employeesList) => {
                
                employeeList.employees = employeesList
            }
        )
}

// -------export employees---------
export const getEmplyees = () => {
    return employeeList.employees.map(employee => ({...employee}))
}


export const fetchList = () => {
    return fetch(`${API}/finished`)
        .then(response => response.json())
        .then(
            (finishedList) => {
                
                requestList.requests = finishedList
            }
        )
}

// -------export finished list---------
export const getList = () => {
    return finishedList.finished.map(request => ({...request}))
}





// POST request
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
        
    }
    // dispatch custom event after POST is completed
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


// function initiates fetch request for DELETE (must have primary key as argument)
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const fetchFinishedJobs = () => {
    return fetch(`${API}/finished`)
        .then(response => response.json())
        .then(
            (finishedJob) => {
                
                finishedList.finished = finishedJob
            }
        )
}

export const getFinished = () => {
    return finishedList.finished.map(finished => ({...finished}))
}

// POST finished job
export const sendFinished = (finishedJob) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(finishedJob)
        
    }
    // dispatch custom event after POST is completed
    return fetch(`${API}/finished`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}