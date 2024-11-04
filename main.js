//Task 2: Implement async/await to fetch ticket data and handle errors.
async function fetchTicketData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
        throw new Error('Failed to fetch ticket');
    }
    const tickets = await response.json();
    console.log('Ticket:', tickets);
}