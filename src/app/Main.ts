import {TicketSchema} from "../interfaces"

export class Main {
    render() : string {
        return `
        <div class="mt-5">
            <table class="table-bordered">
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remaining</th>
                </thead>
                <tbody>
                    ${this.ticketInfo.map(ticket=>`
                        <tr>
                            <td>${ticket.ticketId}</td>
                            <td>${ticket.concertName}</td>
                            <td>${ticket.quantity}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
        `
    }
    constructor(private ticketInfo : TicketSchema[]) {
        this.ticketInfo = ticketInfo;
        console.log('Inside the Main Constructor');
    }
}