const paragraph = document.querySelector(".para");

const historyBtn = ()=>{
    paragraph.innerHTML = ` <h2>History</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, et ut eligendi dolore unde sequi, expedita praesentium excepturi vel deleniti. Nostrum, suscipit voluptatibus. Praesentium dolores similique saepe id placeat labore aliquam, autem vitae non harum adipisci corrupti nesciunt error minima? At placeat voluptatum ea veritatis. Omnis ullam dignissimos voluptatum!</p>`
};

const visionBtn = ()=>{
    paragraph.innerHTML = ` <h2>Vision</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, et ut eligendi dolore unde sequi, expedita praesentium excepturi vel deleniti. Nostrum, suscipit voluptatibus. Praesentium dolores similique saepe id placeat labore aliquam, autem vitae non harum adipisci corrupti nesciunt error minima? At placeat voluptatum ea veritatis. Omnis ullam dignissimos voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque,</p>`
};

const goalsBtn = ()=>{
    paragraph.innerHTML = ` <h2>Goals</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, et ut eligendi dolore unde sequi, expedita praesentium excepturi vel deleniti. Nostrum, suscipit voluptatibus. Praesentium dolores similique saepe id placeat labore aliquam, autem vitae non harum adipisci corrupti nesciunt error minima? At placeat voluptatum ea veritatis. Omnis ullam dignissimos voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, et ut eligendi dolore unde sequi, expedita praesentium excepturi vel deleniti. Nostrum, suscipit voluptatibus.</p>`
};

window.addEventListener('DOMContentLoaded',()=>{
    historyBtn();
})