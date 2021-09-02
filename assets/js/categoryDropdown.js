category = {
    "fashion" : [
        {
            "categoryName" : "Men's Top Wear",
            "list" : [
                "All","Men's T-shirt","Men's Casual Shirts","Men's Formal Shirts","Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Men's Bottom Wear",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Women Ethnic",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Women Western",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Men Footwear",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Women Footwear",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Watches and Accessories",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Bags, Suitcases & Luggages",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Kids",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        },
        {
            "categoryName" : "Winter",
            "list" : [
                "Men's kurtas","Men's Ethnic Set","Men's Blazers","Men's Raincoat","Men's Windcheaters","Men's Suit","Men's Frabic"
            ]
        }
    ]
}

const getObj = (id) =>{
    let obj = document.getElementById(id);
    return obj;
}

const getEle = (ele,cls) => {
    let obj = document.createElement(ele);
    obj.classList = cls;
    return obj;
}

const getCatSubListContainer = (id) => {
    let obj = getEle("div","category-sublist-container");
    obj.id = id;
    return obj;
}

const getCatSubListItem  = (name) => {
    let anch = getEle("a","category-list-item");
        let obj1 = getEle("div","category-list-item-content font-400-15");
            let obj2 = getEle("div","category-list-item-content-text");
    obj2.innerHTML = name;
    obj1.append(obj2);
    anch.append(obj1);
    return anch;
}

const showSubList = (id) => {
    let obj = document.getElementById(id);
    let nobj = document.querySelectorAll(".category-sublist-container");
    nobj.forEach( ele => {
        ele.style.display = "none";
    })

    obj.style.display = "block";
}



const getCatListItem  = (name,data) => {
    let anch = getEle("a","category-list-item");
        let obj1 = getEle("div","category-list-item-content main-list font-400-15");
            let obj2 = getEle("div","category-list-item-content-text");
            let obj3 = getEle("div","category-list-item-content-icon");
                let obj4 = getEle("span","fa fa-angle-right");
    obj3.append(obj4);
    obj2.innerHTML = name;
    obj1.addEventListener("mouseover",function(){
        showSubList(data);
    })
    obj1.append(obj2);
    obj1.append(obj3);
    anch.append(obj1);
    return anch;
}

window.onload = () => {
    let fashionList = getObj("fashion_list");
    let fashionSubList = getObj("fashion_sublist");
    
    category.fashion.forEach((element,index) => {
        fashionList.append(getCatListItem(element.categoryName,`fashion${index}`));

        let obj = getCatSubListContainer(`fashion${index}`);
        element.list.forEach( item => {
            obj.append(getCatSubListItem(item));
        })
        fashionSubList.append(obj);
    });

    let fashionSubListCont = getObj("fashion0");
    fashionSubListCont.style.display = "block";
}

// const listCategories = (icon) => {
//     let icon = getObj(span);
//     icon.style.transform = "rotate(180deg)";
// }