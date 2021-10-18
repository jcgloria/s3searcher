search = document.getElementById("searchTab");
settings = document.getElementById("settingsTab")
searchContainer = document.getElementById("searchContainer")
settingsContainer = document.getElementById("settingsContainer")
searchBtn = document.getElementById("searchBtn")
resultTextArea = document.getElementById("resultTextArea")

search.addEventListener("click", () => {
    search.className = "nav-link active";
    settings.className = "nav-link"
    searchContainer.className = ""
    settingsContainer.className = "hide"
});

settings.addEventListener("click", () => {
    search.className = "nav-link";
    settings.className = "nav-link active"
    searchContainer.className = "hide"
    settingsContainer.className = ""
});

searchBtn.addEventListener("click", () => {
    loadS3()
})

function loadS3() {
    result = ""
    bucket = document.getElementById("inputBucket").value
    ak = document.getElementById("inputAccess").value
    sk = document.getElementById("inputSecret").value
    query = document.getElementById("query").value
    var s3 = new AWS.S3({ accessKeyId: ak, secretAccessKey: sk })
    var params = {
        Bucket: bucket,
    };
    s3.listObjectsV2(params, function (err, data) {
        if (err){
            resultTextArea.value = err; // an error occurred
        } 
        else {
            // successful response
            var result = ""
            data['Contents'].forEach(element => {
                if(element['Key'].includes(query)) result = result + element['Key'] + '\n'
            });
            resultTextArea.value = result
        }
    })
}
