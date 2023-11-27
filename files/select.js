/*

<div class="select">
   <div class="select__header">
      <span class="select__current">Value 1</span>
      <div class="select__icon">&times;</div>
   </div>
   <div class="select__body">
      <div class="select__item current-lang">Value 1</div>
      <div class="select__item">Value 2</div>
      <div class="select__item">Value 3</div>
      <div class="select__item">Value 4</div>
      <div class="select__item">Value 5</div>
   </div>
</div>

*/

function nSelect() {
   let select = function () {
      let selectHeader = document.querySelectorAll('.select__header');
      let selectItem = document.querySelectorAll('.select__item');
      let selectBody = document.querySelector('.select__body');

      selectHeader.forEach(item => {
         item.addEventListener('click', selectToggle)
      });
      selectItem.forEach(item => {
         item.addEventListener('click', selectChoose)
      });
      function selectToggle() {
         this.parentElement.classList.toggle('is-active');
      }
      function selectChoose() {
         let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
         currentText.innerText = text;
         select.classList.add('selected');
         select.classList.remove('is-active');
      }
      if (selectBody) {
         selectBody.addEventListener('click', function (e) {
            const items = document.querySelectorAll('.select__item')
            const target = e.target
            Array.from(items).forEach(item => {
               item.classList.remove('current-lang')
            })
            target.classList.add('current-lang')
         });
      }
   };
   select();
}
nSelect();