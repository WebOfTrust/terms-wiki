import overview from '/static/json/overview.json';

/**
 * The column names of the list of websites to scrape.
 * @type {Array<string>}
 */
const entriesIndex = overview.values[0];


/**
 * Returns the position of a value in the entriesIndex array.
 * @param {string} value - The value to search for in the entriesIndex array.
 * @returns {number} - The position of the value in the entriesIndex array, or -1 if not found.
 */
function positionInArray(value) {
    for (let i = 0; i < entriesIndex.length; i++) {
        if (entriesIndex[i].trim() === value) return i;
    }
    return -1;
}

/**
 * Returns a set of unique values from a 2D array based on a given column index.
 * @param {Array<Array>} data - The 2D array to search for unique values.
 * @param {number} columnIndex - The index of the column to search for unique values.
 * @returns {Set} - A set of unique values from the specified column.
 */
function getUniqueValues(data, columnIndex) {
    const uniqueValues = new Set();
    for (let i = 1; i < data.length; i++) {
        const value = data[i][columnIndex];
        if (value) {
            uniqueValues.add(value);
        }
    }
    return uniqueValues;
}

// overview.values is a 2D array and formColumnNumber, levelColumnNumber, typeColumnNumber are the respective column indexes
const formColumnNumber = positionInArray('Form');
const levelColumnNumber = positionInArray('level');
const typeColumnNumber = positionInArray('Type');


// Get unique values for each column
const uniqueValuesForm = getUniqueValues(overview.values, formColumnNumber);
const uniqueValuesLevel = getUniqueValues(overview.values, levelColumnNumber);
const uniqueValuesType = getUniqueValues(overview.values, typeColumnNumber);


// convert Set to Array
let uniqueValuesArrayForm = Array.from(uniqueValuesForm);
let uniqueValuesArrayLevel = Array.from(uniqueValuesLevel);
let uniqueValuesArrayType = Array.from(uniqueValuesType);

// Create a checkbox state object
function createCheckboxState(uniqueValues) {
    const checkboxState = {};
    Array.from(uniqueValues).forEach((value) => {
        checkboxState[value] = false;
    });
    return checkboxState;
}

const allFormCheckboxesState = createCheckboxState(uniqueValuesForm);
const allLevelCheckboxesState = createCheckboxState(uniqueValuesLevel);
const allTypeCheckboxesState = createCheckboxState(uniqueValuesType);

function areAllCheckboxesFalse() {
    const allCheckboxes = [allFormCheckboxesState, allLevelCheckboxesState, allTypeCheckboxesState];
    for (const checkboxes of allCheckboxes) {
        for (const checkbox in checkboxes) {
            if (checkboxes[checkbox]) {
                return false;
            }
        }
    }
    return true;
}



const addUiToSidebar = () => {
    const glossaryLink = document.querySelector('li.theme-doc-sidebar-item-category-level-1 a[href*="/docs/glossary"]');
    // go up two nodes to get the list item
    const glossaryListItem = glossaryLink.parentNode.parentNode;
    // now get the ul, so we skip the <a>glossary</a> link
    const glossaryListItemChildLinks = glossaryListItem.querySelector('ul').querySelectorAll('a');

    function setMenuItems() {

        function greyOutAllLinks() {
            glossaryListItemChildLinks.forEach((link) => {
                link.classList.add('greyed-out');
            });
        }
        function removeGreyOutAllLinks() {
            glossaryListItemChildLinks.forEach((link) => {
                link.classList.remove('greyed-out');
            });
        }

        greyOutAllLinks();

        // loop through all links in the glossary menu
        glossaryListItemChildLinks.forEach((link) => {
            for (let i = 0; i < overview.values.length; i++) {
                if (overview.values[i][positionInArray('Term')] === link.innerText) {
                    // Go through the checkboxFormState object and check the value of the checkbox
                    // “Form” refers to the column name in the overview.json, NOT the html form of the page
                    for (const checkbox in allFormCheckboxesState) {
                        if (allFormCheckboxesState.hasOwnProperty(checkbox)) {
                            // Find the form value in the overview.values array
                            // Example: if the checkbox is "n", find the "n" value in the overview.values array
                            if (checkbox === overview.values[i][positionInArray('Form')]) {
                                // if the checkbox is true, remove the greyed-out class
                                if (allFormCheckboxesState[checkbox]) {
                                    link.classList.remove('greyed-out');
                                }
                                else {
                                    link.classList.add('greyed-out');
                                }
                            }
                        }
                    }
                    for (const checkbox in allLevelCheckboxesState) {
                        if (allLevelCheckboxesState.hasOwnProperty(checkbox)) {
                            if (checkbox === overview.values[i][positionInArray('Level')]) {
                                if (!allLevelCheckboxesState[checkbox]) { // if it's false
                                    link.classList.remove('greyed-out');
                                } else {
                                    link.classList.add('greyed-out');
                                }
                            }
                        }
                    }
                    for (const checkbox in allTypeCheckboxesState) {
                        if (allTypeCheckboxesState.hasOwnProperty(checkbox)) {
                            if (checkbox === overview.values[i][positionInArray('Type')]) {
                                if (!allTypeCheckboxesState[checkbox]) { // if it's false
                                    link.classList.remove('greyed-out');
                                } else {
                                    link.classList.add('greyed-out');
                                }
                            }
                        }
                    }
                }
            }
        });

        if (areAllCheckboxesFalse()) {
            removeGreyOutAllLinks();
        }
    }


    // add checkboxes to the sidebar, first add a container
    if (document.querySelector('.check-container-form')) {
        // checkboxes already added, do nothing
        return;
    }
    const nav = document.querySelector('nav[aria-label="Docs sidebar"]');
    const classesToAdd = ['border', 'ms-2', 'me-2', 'mb-2', 'p-2', 'rounded'];
    const fontSize = '0.8rem';

    const checkboxFormContainer = document.createElement('div');
    checkboxFormContainer.classList.add(...classesToAdd);
    checkboxFormContainer.classList.add('check-container-form');
    checkboxFormContainer.style.fontSize = fontSize;
    checkboxFormContainer.innerHTML = `<h2 style="font-size: 1.2em">Form:</h2>`

    const checkboxLevelContainer = document.createElement('div');
    checkboxLevelContainer.classList.add(...classesToAdd);
    checkboxLevelContainer.classList.add('check-container-level');
    checkboxLevelContainer.style.fontSize = fontSize;
    checkboxLevelContainer.innerHTML = `<h2 style="font-size: 1.2em">Level:</h2>`

    const checkboxTypeContainer = document.createElement('div');
    checkboxTypeContainer.classList.add(...classesToAdd);
    checkboxTypeContainer.classList.add('check-container-type');
    checkboxTypeContainer.style.fontSize = fontSize;
    checkboxTypeContainer.innerHTML = `<h2 style="font-size: 1.2em">Type:</h2>`

    nav.insertBefore(checkboxLevelContainer, nav.firstChild);
    nav.insertBefore(checkboxFormContainer, nav.firstChild);
    nav.insertBefore(checkboxTypeContainer, nav.firstChild);


    const checkboxesForm = [];
    const checkboxesLevel = [];
    const checkboxesType = [];


    // Form checkboxes
    for (let i = 0; i < uniqueValuesArrayForm.length; i++) {
        const checkboxForm = document.createElement('div');
        checkboxForm.classList.add('form-check');
        checkboxForm.classList.add('form-check-inline');
        checkboxForm.innerHTML = `
          <input data-form=${uniqueValuesArrayForm[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck${i}">
          <label class="form-check-label" for="defaultCheck${i}">
              ${uniqueValuesArrayForm[i]} 
          </label>
      `;
        checkboxForm.addEventListener('click', () => {
            checkboxesForm.forEach((cb, index) => {
                allFormCheckboxesState[cb.dataset.form] = cb.checked;
            });
            // update the menu items based on the checkboxData array
            setMenuItems();
        });

        const formCheckContainer = document.querySelector('.check-container-form');
        formCheckContainer.appendChild(checkboxForm);

        checkboxesForm.push(checkboxForm.querySelector('input'));
    }


    // Level checkboxes
    for (let i = 0; i < uniqueValuesArrayLevel.length; i++) {
        const checkboxLevel = document.createElement('div');
        checkboxLevel.classList.add('form-check');
        checkboxLevel.classList.add('form-check-inline');

        checkboxLevel.innerHTML = `
          <input data-level=${uniqueValuesArrayLevel[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck2${i}">
          <label class="level-check-label" for="defaultCheck2${i}">
              ${uniqueValuesArrayLevel[i]} 
          </label>
      `;
        checkboxLevel.addEventListener('click', () => {
            checkboxesLevel.forEach((cb, index) => {
                allLevelCheckboxesState[cb.dataset.level] = cb.checked;
            });
            // update the menu items based on the checkboxData array
            setMenuItems();
        });

        const levelCheckContainer = document.querySelector('.check-container-level');
        levelCheckContainer.appendChild(checkboxLevel);

        checkboxesLevel.push(checkboxLevel.querySelector('input'));
    }
    // Type checkboxes
    for (let i = 0; i < uniqueValuesArrayType.length; i++) {
        const checkboxType = document.createElement('div');
        checkboxType.classList.add('form-check');
        checkboxType.classList.add('form-check-inline');

        checkboxType.innerHTML = `
          <input data-type=${uniqueValuesArrayType[i]} class="form-check-input" type="checkbox" value="" id="defaultCheck3${i}">
          <label class="type-check-label" for="defaultCheck3${i}">
              ${uniqueValuesArrayType[i]} 
          </label>
      `;
        checkboxType.addEventListener('click', () => {
            checkboxesType.forEach((cb, index) => {
                allTypeCheckboxesState[cb.dataset.type] = cb.checked;
            });
            // update the menu items based on the checkboxData array
            setMenuItems();
        });

        const typeCheckContainer = document.querySelector('.check-container-type');
        typeCheckContainer.appendChild(checkboxType);

        checkboxesType.push(checkboxType.querySelector('input'));
    }
    // return checkboxesForm.map(checkboxForm => checkboxForm.checked);
    // return checkboxesLevel.map(checkboxLevel => checkboxLevel.checked);
};

// function to call when the route changes
export function onRouteDidUpdate({ location, previousLocation }) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    // if (location.pathname === previousLocation?.pathname) return;
    addUiToSidebar();
}

