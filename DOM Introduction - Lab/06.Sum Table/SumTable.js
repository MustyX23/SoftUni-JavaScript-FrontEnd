function sumTable() {
    const table = document.querySelector('table');
    
    let sum = 0;

    const rows = table.querySelectorAll('tbody tr');

    for (let i = 1; i < rows.length - 1; i++) {

        const lastCell = rows[i].lastElementChild;
        
        const value = parseFloat(lastCell.textContent);

        if (!isNaN(value)) {
            sum += value;
        }
    }
    
    document.getElementById('sum').textContent = sum.toFixed(2);
}
