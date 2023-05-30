
let filterMode = "language";
let currentFilterLang = "all";
let currentFilterYear = "all";
let onlyScolar = false;
let popupVisible = true;

//We create a function that will display the posts. Each post is stored in a html file in the folder posts. The content will be displayed in the div with the class "article"; in the "article-container" div
function displayPosts() {
    console.log("displayPosts");
    //we need to empty the div before displaying the posts
    document.getElementById("article-container").innerHTML = "";
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
        //we need to check if the post is visible
        if (postInfos[postArray[i] - 1].visible === false) {
            console.log("post number " + postArray[i] + " is not visible");
            continue;
        }
        //we create a new div
        console.log("create new div for post number " + postArray[i]);
        const newDiv = document.createElement("div");
        //we add the class "article" to the div
        newDiv.classList.add("article");
        //we get the content of the html file by using fetch (really useful to get the content of a file)
        fetch("posts/" + postArray[i] + ".html")
            .then((response) => response.text())
            .then((data) => {
                //we add the content to the div
                newDiv.innerHTML = data;
        });
        //we add the div to the div with the class "article-container"
        document.getElementById("article-container").appendChild(newDiv);
    }
}

function chronoOrder () {
    //we need to reverse the array
    postArray.reverse();
    //we need to change the text of the button
    if(document.getElementById("chrono").innerHTML === "Oldest First") {
        document.getElementById("chrono").innerHTML = "Newest First";
    }
    else {
        document.getElementById("chrono").innerHTML = "Oldest First";
    }
    //we refresh the posts, using the new array
    displayPosts();
}

function resetFilters() {
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
        //we mark the post as visible
        postInfos[postArray[i] - 1].visible = true;
    }
    //we refresh the posts
    displayPosts();
    filterMode = "language";
    currentFilterLang = "all";
    currentFilterYear = "all";
    onlyScolar = false;
}

//change filters
//------------------



//------------------
function filterPosts() {
    //we check if we filter by language or by year
    if (filterMode === "language") {
        console.log("filter by language");
            //we loop through the array, and check if the value of language is the same as the current filter
        for (let i = 0; i < postArray.length; i++) {
            if (postInfos[postArray[i] - 1].language === currentFilterLang) {
            //if it is, we mark the post as visible
                postInfos[postArray[i] - 1].visible = true
            }
            else {
                //if it is not, we mark the post as not visible
                postInfos[postArray[i] - 1].visible = false;
         }
        }
    }
    else if (filterMode === "year") {
        console.log("filter by year");
        for (let i = 0; i < postArray.length; i++) {
            if (postInfos[postArray[i] - 1].year === currentFilterYear) {
            //if it is, we mark the post as visible
                postInfos[postArray[i] - 1].visible = true
            }
            else {
                //if it is not, we mark the post as not visible
                postInfos[postArray[i] - 1].visible = false;
         }
        }
    }
    else if (filterMode === "scolar") {
        console.log("filter by scolar");
        for (let i = 0; i < postArray.length; i++) {
            if (postInfos[postArray[i] - 1].scolar === true) {
            //if it is, we mark the post as visible
                postInfos[postArray[i] - 1].visible = true
            }
            else {
                //if it is not, we mark the post as not visible
                postInfos[postArray[i] - 1].visible = false;
            }
        }
    }
    //we refresh the posts
    displayPosts();
}

function closePopup() {
    console.log("close popup");
    document.getElementById("article-container").innerHTML = "";
    displayPosts();
}
    
function main() {
    //when the page is loaded, we display the article 444 (about me popup)
    document.getElementById("article-container").innerHTML = "";
    const newDiv = document.createElement("div");
    newDiv.classList.add("popup-div");
    fetch("popup.html")
        .then((response) => response.text())
        .then((data) => {
            newDiv.innerHTML = data;
    });
    document.getElementById("article-container").appendChild(newDiv);
    console.log("popup displayed");
}

main();