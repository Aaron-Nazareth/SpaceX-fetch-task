// MVP

// let launches = []; // Creates initial empty array for our launch details

// const loadData = () => {
//     fetch("https://api.spacexdata.com/v5/launches") // Retrieves existing data from API
//         .then(result => result.json())  // Converts data to json format
//         .then(data => launches = data)  // Sets launches array to contain data from previous .then
//         .then(() => {console.log(launches)}) // Logs launches array to console - just checking data has been stored
//         .then(() => {

//             const list = document.querySelector("#launch-list");    // Retrieves list from html file by id name

//             const launchNames = launches.map(launch => launch.name) // Maps from launches array to new launchNames array, using each launch name as an index

//             launchNames.forEach(launch => {
//                 const listItem = document.createElement("li");  // Creates a list element
//                 listItem.innerText = launch;    // Sets each list item to be a launch name
//                 list.appendChild(listItem); // Appends each list item to end of list
//             })
//         })
// }

// loadData();



// Extension

let launches = []; // Creates initial empty array for our launch details

const loadData = () => {
    fetch("https://api.spacexdata.com/v5/launches") // Retrieves existing data from API
        .then(result => result.json())  // Converts data to json format
        .then(data => launches = data)  // Sets launches array to contain data from previous .then
        .then(() => {console.log(launches)}) // Logs launches array to console - just checking data has been stored
        .then(() => {

            const list = document.querySelector("#launch-list");   // Retrieves list from html file by id name

            // Map all launch details we want to new arrays
            const launchNames = launches.map(launch => launch.name);
            const launchDates = launches.map(launch => launch.date_local);
            const launchArticles = launches.map(launch => launch.links.article);
            const launchImages = launches.map(launch => launch.links.patch.small);

            // Loop through all launches
            for (let i = 0; i < launches.length; i++) {
                // Create a list element
                const listItem = document.createElement("li");

                // Create an anchor element for links
                const articleLink = document.createElement("a");
                // Set properties for each link
                articleLink.href = launchArticles[i];   // href required to specify the URL, which makes it a hyperlink
                articleLink.innerText = launchArticles[i];  // Sets text form of link

                // Create image element 
                const image = document.createElement("img");
                // Set properties for each image
                image.src = launchImages[i];    // Specifies each image URL
                image.alt = launchNames[i]; // Sets the value for an alternate text, if an image can't be displayed
                
                // Sets list item text
                listItem.innerText = launchNames[i] + ", " + launchDates[i] + ", ";
                // Append link and image to end of list item
                listItem.appendChild(articleLink);
                listItem.appendChild(image);

                // Append list item to list
                list.appendChild(listItem);
            }

        })
}

loadData();