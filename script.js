const url = 'https://dummyapi.io/data/api/post';


// Function to fetch data
fetch(url, {
    headers: {
        'app-id': '60212a427e9fc1d58baa9a2d'
}
})
.then(response => response.json())
.then(json => getJson(json));


// Function to get json data
const getJson = (json) => {
    let jsonArray = json.data;
    jsonArray.forEach(element => inflateLayout(element));
}

// This is the function to inflate the layout and add the post
const inflateLayout  = (element) => {
    let imageUrl = element.image;
    let title = element.owner.firstName + " " + element.owner.lastName;
    let content = element.text;
    let userImageUrl = element.owner.picture;
    

    // Creating individual post container div
    const post_container = document.createElement('div');
    const post_title_container = document.createElement('div');
    const user_image = document.createElement('div');
    const userImage = document.createElement('img');
    const post_title = document.createElement('div');
    const post_image = document.createElement('div');
    const image = document.createElement('img');
    const image_layer = document.createElement('div');
    const post_content = document.createElement('div');

    // Adding class to each created element
    post_container.classList.add('post');
    post_title_container.classList.add('post_title_container');
    user_image.classList.add('user_image');
    post_title.classList.add('post_title');
    post_image.classList.add('post_image');
    image_layer.classList.add('image_layer');
    post_content.classList.add('post_content');

    // Appending each created element to the respected div
    document.body.appendChild(post_container);
    post_container.appendChild(post_title_container);

    post_title_container.appendChild(user_image);
    user_image.appendChild(userImage);

    post_title_container.appendChild(post_title);

    post_container.appendChild(post_image);
    post_image.appendChild(image);
    post_image.appendChild(image_layer);

    post_container.appendChild(post_content);


    // Assigning value
    post_title.innerText = title;
    post_content.innerText = content;
    image.src = imageUrl;
    userImage.src = userImageUrl;
}