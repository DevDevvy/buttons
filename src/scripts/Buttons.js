import { CompletionsHTML, ReservationsHTML } from "./Reservations.js"
import { ServiceForm } from "./ServiceForm.js"



export const ButtonsHTML = () => {
    return `
    <h1>Button's Scary Parties</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${ReservationsHTML()}
    </section>
    <section class="completions">
        <h2>COMPLETE</h2>
        ${CompletionsHTML()}
    </section>
    `
}