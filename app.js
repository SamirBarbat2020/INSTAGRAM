

function reload() {
    loadComments();
    sectionStarter();
    displayPostContainer();
}

function loadComments() {
    for (let i = 0; i < posts.length; i++) {
        load(i);
    }
}

let postContainerImages = [
    "images/persons/man-g38181edae_640.png",
    "images/persons/woman-g9dd4436ad_640.jpg",
    "images/persons/man-g38181edae_640.png",
    "images/persons/woman-g9dd4436ad_640.jpg",
    "images/persons/man-g38181edae_640.png",
    "images/persons/woman-g9dd4436ad_640.jpg"
];

let posts = [
    {
        'author': 'Laura',
        'personImage': 'model-g3913a8810_1920.jpg',
        'postImage': 'dog-gb57d58b9e_640.jpg',
        'comments': [],

    },
    {
        'author': 'Night Queen',
        'personImage': 'woman-g444b57fa2_1920.jpg',
        'postImage': 'pexels-maxime-francis-2246476.jpg',
        'comments': [],

    },
    {
        'author': 'Girls Club',
        'personImage': 'people-g3fcb9ec07_1920.jpg',
        'postImage': 'pexels-tan-danh-1329711.jpg',
        'comments': [],

    },
    {
        'author': 'Seline',
        'personImage': 'girl-gcd5e1b2f2_1920.jpg',
        'postImage': 'skateboard-g25ff9699a_1920.jpg',
        'comments': [],

    },
    {
        'author': 'Thomas',
        'personImage': 'beard-g48555590e_640.jpg',
        'postImage': 'wine-gbd9b6d70c_1920.jpg',
        'comments': [],

    }
];


function sectionStarter() {
    for (let i = 0; i < postContainerImages.length; i++) {
        document.getElementById('post').innerHTML += `
                <div class="post_title_image">
                    <img src="${postContainerImages[i]}" alt="">
                </div>
        `;
    }
}

function saveComment(index) {
    let input = document.getElementById('user_comment' + index).value;
    document.getElementById('user_comment' + index).value = '';
    posts[index]['comments'].push(input);
    showPostComments(index);
    saveLocal(index);
}



function saveLocal(postIndex) {
    let commentText = JSON.stringify(posts[postIndex]['comments']);
    localStorage.setItem('commentKey' + postIndex, commentText);
}

function load(postIndex) {
    let commentText = localStorage.getItem('commentKey' + postIndex);
    if (commentText) {
        posts[postIndex]['comments'] = JSON.parse(commentText);
    }
}


function displayPostContainer() {
    document.getElementById('postContainer').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        document.getElementById('postContainer').innerHTML += `
        <div  class="post__container">
        <div class="post_title">
        <div class="post_title_image">
            <img src="images/persons/${element['personImage']}" alt="">
        </div>
        <div class="post_title_text">
            <p>${element['author']}</p>
        </div>
    </div>
    <div class="post_image">
        <img src="images/photos/${element['postImage']}" alt="">
    </div>
    <div class="coment_icon_container">
        <img src="icons/love.png" alt="">
        <img src="icons/chat.png" alt="">
        <img src="icons/send.png" alt="">
        
    </div>
    
    <div class="comment-section">
        <div id="user_input_display${i}" class="coment_container">
        </div>
        <div class="add_comment_container">
            <textarea id="user_comment${i}" placeholder="Write your comment..." name="" cols="30"
                rows="10"></textarea>
            <button onclick="saveComment(${i})" href="#">Save</button>
        </div>
    </div>
    </div>
        `;
        showPostComments(i);

    }

}

function showPostComments(postIndex) {
    document.getElementById('user_input_display' + postIndex).innerHTML = "";
    for (let i = 0; i < posts[postIndex]["comments"].length; i++) {
        document.getElementById('user_input_display' + postIndex).innerHTML += `
            <p>${posts[postIndex]["comments"][i]}</p>  
        `;
    }
}


