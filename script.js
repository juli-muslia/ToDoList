function addToDo () {
     
    todolist.innerHTML += `
    <li class="mdl-list__item">
                 <span class="mdl-list__item-primary-content">
                   <i class="material-icons  mdl-list__item-avatar">turned_in_not</i>
                   ${todofield.value}
                 </span>
                 <span class="mdl-list__item-secondary-action">
                   <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
                     <input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked />
                   </label>
                 </span>
               </li>
    `;
     todofield.value = '';
    }