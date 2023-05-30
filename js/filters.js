function filterJs() {
    //we change the current filter
    filterMode = "language";
    currentFilterLang = "Js";
    //we call the function that filter the posts
    filterPosts();
}

function filterTs() {
    //we change the current filter
    filterMode = "language";
    currentFilterLang = "Ts";
    //we call the function that filter the posts
    filterPosts();
}

function filterPython() {
    //we change the current filter
    filterMode = "language";
    currentFilterLang = "Python";
    //we call the function that filter the posts
    filterPosts();
}

function filterCpp() {
    //we change the current filter
    filterMode = "language";
    currentFilterLang = "Cpp";
    //we call the function that filter the posts
    filterPosts();
}

function filterPhp() {
    //we change the current filter
    filterMode = "language";
    currentFilterLang = "Php";
    //we call the function that filter the posts
    filterPosts();
}

function filterScolar() {
    //we change the current filter,
    filterMode = "scolar";
    //we call the function that filter the posts
    filterPosts();
}

function filter2022() {
    //we change the current filter
    filterMode = "year";
    currentFilterYear = 2022;
    //we call the function that filter the posts
    filterPosts();
}

function filter2023() {
    //we change the current filter
    filterMode = "year";
    currentFilterYear = 2023;
    //we call the function that filter the posts
    filterPosts();
}

function hideFilters() {
    //we hide the class filter
    document.getElementById("filter").classList.add("hidden");
}

function showFilters() {
    //we show the class filter
    document.getElementById("filter").classList.remove("hidden");
}

function resetFilters() {
    //we loop through the array
    for (let i = 0; i < postArray.length; i++) {
        //we mark the post as visible
        postInfos[postArray[i] - 1].visible = true;
    }
    //we refresh the posts
    displayPosts();
    showNumberOfPosts();
    filterMode = "language";
    currentFilterLang = "all";
    currentFilterYear = "all";
    onlyScolar = false;
}

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
    showNumberOfPosts();
}