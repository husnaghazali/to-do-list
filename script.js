document.addEventListener("DOMContentLoaded",function(){
    
    document.getElementById("newInput").addEventListener("keyup", function(event){
        if(event.key=== "Enter"){
            addNew();
        }
    });
});

function addNew(){
    var newInput = document.getElementById("newInput").value;
    var newList = document.getElementById("newList");
    /*check input is not empty */
        
    if (newInput.trim() !== '') {
        
        var listItem = document.createElement('li');
        listItem.className = 'taskListItem';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'taskCheckbox';
        checkbox.addEventListener('change', function () {
        toggleCompletion(listItem);
            });

        var newText = document.createElement('span');
        newText.appendChild(document.createTextNode(newInput));
        listItem.appendChild(newText);
        
        var removeButton = document.createElement('button');
        removeButton.className = 'removeButton';
        removeButton.appendChild(document.createTextNode('Remove'));
        removeButton.onclick = function() {
          listItem.remove();
          updateClearButtonVisibility();
        };
        listItem.appendChild(removeButton);

        // Append the new list item to the ul element
        document.getElementById('newList').appendChild(listItem);
        // Clear the input field
        document.getElementById('newInput').value = '';

    }

    function toggleCompletion(listItem) {
        listItem.classList.toggle('completed-task');
        updateClearButtonVisibility();
    }

    const clearAllBtn = document.getElementById('clear-all-btn');
    clearAllBtn.addEventListener('click', clearAllTasks);
    // Add a function to update the visibility of the "Clear All" button
    function updateClearButtonVisibility() {
        console.log('Updating button visibility');
        // Check if there are tasks in the list
        const hasTasks = newList.children.length > 0;
        // Show or hide the "Clear All" button based on the presence of tasks
        clearAllBtn.style.display = hasTasks ? 'block' : 'none';
        }

    function showConfirmation() {
        return new Promise((resolve) => {
            const isConfirmed = window.confirm('Are you sure you want to clear all tasks?');
            resolve(isConfirmed);
        });
    }

    async function clearAllTasks() {
        console.log('Clearing all tasks');
        const isConfirmed = await showConfirmation();
        // Remove all tasks from the DOM or your task list
        // Show confirmation and wait for the user's response
        if (isConfirmed) {
            
            clearAllBtn.style.display = 'none';
        // Remove all tasks from the DOM or your task list
            newList.innerHTML = '';
            updateClearButtonVisibility();
            } 
    }

    updateClearButtonVisibility();
}



/*function removeList(button){
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
/*<button onclick="removeList(this)">Remove</button>*/