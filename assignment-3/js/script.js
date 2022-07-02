var tabButtons = document.querySelectorAll('.tab-button');
var tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn,index)=>{
  btn.addEventListener('click',()=>{
    //remove "is-active" class from the tab buttons if any.
    tabButtons.forEach((button)=>{
      button.classList.remove('is-active');
    });
    //remove "is-active" class from the tab contents if any.
    tabContents.forEach((content)=>{
      content.classList.remove('is-active');
    });
    tabButtons[index].classList.add('is-active');
    tabContents[index].classList.add('is-active');
  });
});


function logout(){
  alert('Good bye!');
}
