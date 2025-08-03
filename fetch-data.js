

const fetchUserData=async() =>{
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById("api-data")
    try{
        const response = await fetch(apiUrl)
        const users = await response.json()
        dataContainer.innerHTML = ""
    userList = document.createElement('ul')
    users.array.forEach(user => {
       const li = document.createElement('li')
       li.textContent = users
       userList.append('li')
    });
    }
    catch {
        dataContainer.innerHTML = ''
        dataContainer.textContent = 'Failed to load user data.'
    }


    
}

addEventListener('DOMContentLoaded', fetchUserData)