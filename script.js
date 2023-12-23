document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-link");
  const parentContent = document.getElementById("parentContent");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const pageURL = e.target.getAttribute("href");

      fetch(pageURL)
        .then((response) => response.text())
        .then((html) => {
          parentContent.innerHTML = html;
        })
        .catch((error) => {
          console.error("Error fetching the page: ", error);
        });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const profileImage = document.getElementById("profileImage");
  const profileMenu = document.getElementById("profileMenu");

  profileImage.addEventListener("click", function () {
    profileMenu.style.display =
      profileMenu.style.display === "block" ? "none" : "block";
  });

  // Hide the profile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!profileImage.contains(event.target)) {
      profileMenu.style.display = "none";
    }
  });

  // Implement actions for view profile and logout
  const viewProfile = document.getElementById("viewProfile");
  const logout = document.getElementById("logout");

  viewProfile.addEventListener("click", function (e) {
    e.preventDefault();
    // Add functionality to view profile
    console.log("View Profile clicked");
  });

  logout.addEventListener("click", function (e) {
    e.preventDefault();
    // Add functionality for logout
    console.log("Logout clicked");
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const createPostBtn = document.getElementById('createPostBtn');
    const createPostSection = document.getElementById('createPostSection');
    const postForm = document.getElementById('postForm');
    const postsSection = document.getElementById('postsSection');

    // Show/hide create post section
    createPostBtn.addEventListener('click', function() {
        createPostSection.style.display = createPostSection.style.display === 'none' ? 'block' : 'none';
    });

    // Submit post form
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const postHeading = document.getElementById('postHeading').value;
        const postDescription = document.getElementById('postDescription').value;

        // Simulating the post creation
        createPost(postHeading, postDescription); // Function to create a new post
        postForm.reset(); // Reset the form
        createPostSection.style.display = 'none'; // Hide the create post section
    });

    // Function to create a new post and display it
    function createPost(heading, description) {
        const post = document.createElement('div');
        post.classList.add('post');

        post.innerHTML = `
            <h2>${heading}</h2>
            <p>${description}</p>
            <div class="post-actions">
                <button class="upvote-btn">Upvote</button>
                <button class="downvote-btn">Downvote</button>
                <span>0 votes</span>
                <button class="comment-btn">Comment</button>
            </div>
            <div class="comments-section"></div>
        `;

        postsSection.prepend(post);
        addPostFunctionality(post);
    }

    // Function to add functionalities (voting, comments) to posts
    function addPostFunctionality(post) {
        const upvoteBtn = post.querySelector('.upvote-btn');
        const downvoteBtn = post.querySelector('.downvote-btn');
        const commentBtn = post.querySelector('.comment-btn');

        let voteCount = 0;

        upvoteBtn.addEventListener('click', function() {
            voteCount++;
            post.querySelector('span').textContent = `${voteCount} vote${voteCount !== 1 ? 's' : ''}`;
        });

        downvoteBtn.addEventListener('click', function() {
            voteCount--;
            post.querySelector('span').textContent = `${voteCount} vote${voteCount !== 1 ? 's' : ''}`;
        });

        commentBtn.addEventListener('click', function() {
            const commentsSection = post.querySelector('.comments-section');
            commentsSection.innerHTML += `
                <div class="comment">Sample Comment</div>
            `;
        });
    }
});

// Function to create a new post and display it
// function createPost(heading, description) {
//   const post = document.createElement("div");
//   post.classList.add("post");

//   post.innerHTML = `
//         <h2>${heading}</h2>
//         <p>${description}</p>
//         <div class="post-actions">
//             <button class="upvote-btn">Upvote</button>
//             <button class="downvote-btn">Downvote</button>
//             <span>0 votes</span>
//             <button class="comment-btn">Comment</button>
//         </div>
//         <div class="comments-section"></div>
//     `;

//   postsSection.prepend(post);
//   addPostFunctionality(post); // Bind events after creating the post
// }

// Function to add functionalities (voting, comments) to posts
// function addPostFunctionality(post) {
//   const upvoteBtn = post.querySelector(".upvote-btn");
//   const downvoteBtn = post.querySelector(".downvote-btn");
//   const commentBtn = post.querySelector(".comment-btn");

//   // Rest of the event binding code...
// }

// // Show/hide create post section
// createPostBtn.addEventListener("click", function () {
//   createPostSection.style.display =
//     createPostSection.style.display === "none" ? "block" : "none";
// });

// // Submit post form
// postForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const postHeading = document.getElementById("postHeading").value;
//   const postDescription = document.getElementById("postDescription").value;

//   createPost(postHeading, postDescription); // Create a new post
//   postForm.reset(); // Reset the form
//   createPostSection.style.display = "none"; // Hide the create post section
// });

// Event listeners for dynamically added elements may need to be reattached after content loads in the right section
// Ensure that any post-related functionalities are bound again after dynamically loading the content.


// Event delegation to handle clicks within the posts section
// postsSection.addEventListener('click', function(event) {
//     const target = event.target;

//     if (target.matches('.upvote-btn')) {
//         handleUpvote(target);
//     } else if (target.matches('.downvote-btn')) {
//         handleDownvote(target);
//     } else if (target.matches('.comment-btn')) {
//         handleComment(target);
//     }
// });

// // Functions to handle specific actions (e.g., upvote, downvote, comment)
// function handleUpvote(button) {
//     // Logic for upvoting
//     // Access necessary elements related to this specific upvote
// }

// function handleDownvote(button) {
//     // Logic for downvoting
//     // Access necessary elements related to this specific downvote
// }

// function handleComment(button) {
//     // Logic for commenting
//     // Access necessary elements related to this specific comment
// }

// // Other existing functions...
