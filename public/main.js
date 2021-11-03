const junkCreateCard=(num)=>{
    console.log(`test`)
    let listItem = document.getElementById(`listitem${num}`)
    alert(listItem.innerHTML)
    let card = document.getElementById(`junkCard`)
    card.innerHTML=''
    card.innerHTML = `<h3>${listItem.innerHTML}</h3><br><img src="https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1"/>`
}
const testAlert=(num)=>{
    alert(num)
}