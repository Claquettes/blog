//We create a function that will display the posts. Each post is stored in a html file in the folder posts. The content will be displayed in the div with the class "article"; in the "article-container" div
function displayPosts() {
    document.getElementById("article-container").innerHTML = "";
    //we reset the number of posts in this scope
    numberOfPostsInThisScope = 0;
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
        //we need to check if the post is visible
        if (postInfos[postArray[i] - 1].visible === false) {
            //we do nothing
        }
        else {
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
        //we increment the number of posts in this scope
        numberOfPostsInThisScope++;
        }
    }
}

function showNumberOfPosts() {
    //we display the number of posts in this scope
    document.getElementById("numberOfPosts").innerHTML = "They are currently " + numberOfPostsInThisScope + " posts in this scope";
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

function closePopup() {
    console.log("close popup");
    document.getElementById("article-container").innerHTML = "";
    showFilters();
    displayPosts();
    showNumberOfPosts();
}
    
function main() {
    //when the page is loaded, we display the article 444 (about me popup)
    hideFilters();
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