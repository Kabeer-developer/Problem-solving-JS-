//normal fetch

//fetch('https://randomuser.me/api/')
   // .then(response => response.json())
   // .then(data => console.log(data));

// fetch using async and await

async function fetchData() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error("failed to fetch");
        } else {
            const data = await response.json();
            console.log(data);
        }
    }
    catch(error){
        console.error(error);
    }
}

fetchData();