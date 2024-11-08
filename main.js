//Task 2: Implement async/await to fetch ticket data and handle errors.
const ticketdata = document.getElementById('ticketcontainer');
async function fetchTicketData() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
        throw new Error('Failed to fetch ticket');
    }
    
    const tickets = await response.json();}
//Task 4: Handle Errors and Use finally to Ensure Cleanup
    catch (error) {
    console.error('Error:', error.message)
} finally {
    console.log('Fetch attempt completed.');
}

//Task 3: Dynamically display tickets on the page.
    tickets.forEach(ticket => {
    const ticketDiv = document.createElement('div');
    ticketDiv.classList.add('ticket');
    ticketDiv.innerHTML = `
        <h2>Ticket ID: ${ticket.id}</h2>
        <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
        <p><strong>Issue Description:</strong> ${ticket.title}</p>
        <p><strong>Details:</strong> ${ticket.body}</p>
    `;})
    }
fetchTicketData()
