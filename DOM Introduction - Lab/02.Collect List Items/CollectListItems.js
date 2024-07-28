function extractText() {

    const ul = document.getElementById('items');
    const textArea = document.getElementById('result');
    
    let items = [];

    for (const item of ul.getElementsByTagName('li')) {
        items.push(item.textContent);        
    }

    textArea.value = items.join('\n');
}