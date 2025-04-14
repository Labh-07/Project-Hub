let bagItems;
onLoad();


function onLoad(){
bagItems=JSON.parse(localStorage.getItem('bagItems')) || [];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId){ //if we pass a whole objec then it shows an error , unexpected identifier 'object' , (there are many objects with same credentials , so we pass item.id)
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hidden';
    }
}

function displayItemsOnHomePage(){ //in normal function defination we can call the function before the initialization , if we define this function as a anonymous function then in this case we should intialize before the use of that . so use anonymous function only when require

let itemsContinerElement=document.querySelector('.items-container');

//for single item (starting item)
// let item={
//     item_image:'/assets/images/1.jpg',
//     rating:{
//         stars:4.5,
//         noOfReviews:1400,
//     },
//     companyName:'Carlton London',
//     item_name:'Rhodium-Plated CZ Floral Studs',
//     current_price:606,
//     original_price:1045,
//     discount_percenage:42,

// }

let innerHTML=``;

if(!itemsContinerElement){ //in case of bag we dont have structure like index.html so in this case it returns from this
    return;
}
items.forEach(item => {
    innerHTML += `
    <div class="item-container">
    <img class="item-image" src="${item.image}" alt="Earrings">
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
   </div>
    `;
})


itemsContinerElement.innerHTML=innerHTML;

}