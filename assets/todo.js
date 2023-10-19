let get_inp = document.getElementById("input");
let btn = document.getElementById("btn");
let close = document.getElementById("close_btn");
document.addEventListener('keyup',(event)=>{
    if (event.key == "Enter") {
        if (get_inp.val == '') {
            alert("Value Is Empty")
        }
        else{
            addToList();
            clear();
        }
    }
})
let edit = document.getElementById("edit_btn");
btn.addEventListener('click',addToList)
function addToList(params) {
    if(get_inp.value == ''){
        alert("Please Enter Anything")
    }
    else{
    create_a_list(get_inp.value)
    clear();
    }
}
function create_a_list(list_text) {
    let items = document.getElementById("items");
    let ul = document.getElementById("list");
    let li = document.createElement('li');
    let left_div = document.createElement("div");
    let right_div = document.createElement("div");
    let text = document.createElement("p");
    let close_btn = document.createElement('button');
    let edit_btn = document.createElement('button');
    let img_for_close = document.createElement('img');
    let img_for_edit = document.createElement('img');
    items.append(ul)
    ul.append(li);
    left_div.className = "left";
    left_div.id = "left";
    right_div.className = "right";
    right_div.id = "right";
    li.append(left_div);
    li.append(right_div);
    document.getElementById("left");
    text.textContent = list_text;
    left_div.append(text);
    edit_btn.className = "edit"
    close_btn.className = "close"
    right_div.append(edit_btn);
    right_div.append(close_btn);
    edit_btn.append(img_for_edit);
    close_btn.append(img_for_close);
    let edit_img = "./edit-icon.png"
    let close_img = "./delete-icon.png"
    img_for_edit.src = edit_img;
    img_for_close.src = close_img;
    close_btn.addEventListener('click',close_list);
    edit_btn.addEventListener('click',()=>{
       let val=  prompt("Update", text.textContent)
       text.textContent = val
    });
}
function clear() {
    get_inp.value = ""
}
function close_list(event) {
    let remove_item =event.target.parentNode.parentNode.parentNode;
    remove_item.remove();
}

let a = document.getElementById("some");