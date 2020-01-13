class UI {
    constructor(chat){
        this.chat = chat;
    }
    view(message)
    {
        const li = `
        <li class = "list-group-item bg-light text-warning"> 
        <span class = "mID">${message.id} : </span>
        <span class = "mtxt">${message.messagetxt}</span>
        </li>
        `;
        this.chat.innerHTML+=li;
    }
}