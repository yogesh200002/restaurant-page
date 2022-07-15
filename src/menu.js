const contentSelector = document.querySelector('#content')

function menuCreation(){
    const tabs = document.querySelectorAll('.tab-name')
    tabs[0].style.backgroundColor = '#D9D9D9'
    tabs[1].style.backgroundColor = 'rgba(255, 77, 77, 0.63)'
    tabs[2].style.backgroundColor = '#D9D9D9'
    const menuContainer = document.createElement('div')
    menuContainer.id = 'menu-container'
    const menuTabs = document.createElement('div')
    menuTabs.id = 'menu-tab'
    const breakfastTab = document.createElement('div')
    const LunchTab = document.createElement('div')
    const dinnerTab = document.createElement('div')
    breakfastTab.setAttribute('style', 'white-space: pre;');
    LunchTab.setAttribute('style', 'white-space: pre;');
    dinnerTab.setAttribute('style', 'white-space: pre;');
    breakfastTab.textContent = 'Breakfast \r\n'
    breakfastTab.textContent +=  '7 am to 11 30 am'
    LunchTab.textContent = 'Lunch \r\n'
    LunchTab.textContent += '11 30 am to 4 pm'
    dinnerTab.textContent = 'Dinner \r\n'
    dinnerTab.textContent += '4 pm to 10 pm'
    menuTabs.append(breakfastTab,LunchTab,dinnerTab)
    const tableContainer = document.createElement('div')
    tableContainer.classList.add('menu-card')
    const breakfastTable = document.createElement('table')
    breakfastTable.classList.add('breakfast')
    breakfastTable.innerHTML = `
    <tr>
    <td>Plain Dosa</td>
    <td>Rs: 40</td>
    </tr>
    <tr>
        <td>Masala Dosa</td>
        <td>Rs: 60</td>
    </tr>
    <tr>
        <td>Podi Dosa</td>
        <td>Rs: 50</td>
    </tr>
    <tr>
        <td>Onion Dosa</td>
        <td>Rs: 50</td>
    </tr>
    <tr>
        <td>Idli (2pcs)</td>
        <td>Rs: 30</td>
    </tr>
    <tr>
        <td>Medhu Vada</td>
        <td>Rs: 20</td>
    </tr>
    <tr>
        <td>Pongal</td>
        <td>Rs: 40</td>
    </tr>
    <tr>
        <td>Chapathi (2pcs)</td>
        <td>Rs: 25</td>
    </tr>
    <tr>
        <td>Poori Masala</td>
        <td>Rs: 40</td>
    </tr>
    `
    const lunchTable = document.createElement('table')
    lunchTable.classList.add('lunch')
    lunchTable.innerHTML = 
    `
    <tr>
    <td>Veg Meals</td>
    <td>Rs: 100</td>
    </tr>
    <tr>
        <td>Butter Naan (2 pcs)</td>
        <td>Rs: 30</td>
    </tr>
    <tr>
        <td>Roti (2 pcs)</td>
        <td>Rs: 20</td>
    </tr>
    <tr>
        <td>Paneer Butter Masala</td>
        <td>Rs: 140</td>
    </tr>
    <tr>
        <td>Gobi Manchurian</td>
        <td>Rs: 130</td>
    </tr>
    <tr>
        <td>Mushroom Masala</td>
        <td>Rs: 130</td>
    </tr>
    <tr>
        <td>Kadai Paneer</td>
        <td>Rs: 150</td>
    </tr>
    <tr>
        <td>Veg Noodles <br> (Gobi / mushroom / paneer)</td>
        <td>Rs: 140/150/160</td>
    </tr>
    <tr>
        <td>Veg Fried Rice <br> (Gobi / mushroom / paneer)</td>
        <td>Rs: 140/150/160</td>
    </tr>
    `
    const dinnerCol = document.createElement('div')
    dinnerCol.classList.add('dinner')
    dinnerCol.innerHTML = `<div> All dishes are available except <br> 
    veg meals. </div>`
    tableContainer.append(breakfastTable,lunchTable,dinnerCol)
    menuContainer.append(menuTabs,tableContainer)
    contentSelector.insertBefore(menuContainer,contentSelector.childNodes[2])
}

export {menuCreation};