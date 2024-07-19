function git(){
    var originalName = document.getElementById('text').value;
    console.log(originalName);
    fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        // Construct the HTML string with the img tag
        var imgElement = `<img src="${data.avatar_url}" alt="user_avatar">`;
        // Set the innerHTML of the result element
        document.getElementById("result").innerHTML = imgElement;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        // Optionally handle errors here
    });
}