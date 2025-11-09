//Global & DOM Variables
//Blog Post & Feed--------
let feedBatch = document.getElementById('feed-batch')
let blogItemTemplate = document.querySelector('.blog-item-template')
let feedData = []


//Form---------
const createBlogForm = document.querySelector('#create-blog-form')

//Inputs----------
const blogTitleInput = document.querySelector('#create-blog-title')
const blogContentInput = document.querySelector('#create-blog-content')


//Errors
const blogTitleError = document.querySelector('#title-error')
const blogContentError = document.querySelector('#content-error')


//Blog Form Field Validity Checks----------------------------------
blogTitleInput.addEventListener('input', (event) => {
    if (blogTitleInput.validity.patternMismatch) {
        blogTitleInput.setCustomValidity('Must contain atleast 1 letter.')
    }
    else if (blogTitleInput.validity.valueMissing) {
        blogTitleInput.setCustomValidity('Please provide a title.')
    }
    else if (blogTitleInput.validity.tooShort) {
        blogTitleInput.setCustomValidity('Must be at least 3 characters long.')
    }
    else { blogTitleInput.setCustomValidity('') }
    blogTitleError.textContent = blogTitleInput.validationMessage
})

blogContentInput.addEventListener('input', (event) => {
    if (blogContentInput.validity.valueMissing) {
        blogContentInput.setCustomValidity("You haven't entered any content.")
    }
    else if (blogContentInput.validity.tooShort) {
        blogContentInput.setCustomValidity('Must be at least 10 characters long.')
    }
    else { blogContentInput.setCustomValidity('') }
    blogContentError.textContent = blogContentInput.validationMessage
})

//Blog & Feed Creation----------------------------------

//Event Delegation for each post, on the ul feedBatch (#feed-batch) 
feedBatch.addEventListener('click', (event) => {
    if (event.target.classList.contains('editBtn')) {
        //Open modal or repopulate form to edit 
    }
    if (event.target.classList.contains('deleteBtn')) {
        const blogItem = event.target.closest('li')
        //Add a Removal from the local storage as well here.
        blogItem.remove()
    }

})
//Render Posts in Feed
function renderFeed() {

    //Create Fragment for batch--------------------------
    const fragment = document.createDocumentFragment()

    //Blog item Object Setup--------------------------
    let item = {
        id: Math.floor(Math.random() * 1000),
        title: blogTitleInput.value,
        content: blogContentInput.value,
        timestamp: Date.now()
    }

    //Data Setup & Update--------------------------
    if (localStorage.getItem('feedDisplayData')) { //Returning user
        const retrievedFeedData = localStorage.getItem('feedDisplayData') //Get local storage array
        feedData = JSON.parse(retrievedFeedData) //Update the array with stored data
        feedData.push(item) //Add new blogItem into the array
    }
    else { //New users
        feedData.push(item)
    }

    //Add Array to Fragment--------------------------
    for (let blog of feedData) {
        //Blog item Display variables
        const blogItem = blogItemTemplate.cloneNode(true)
        const blogTitle = blogItem.querySelector('.blog-item-title')//Get title display
        const blogContent = blogItem.querySelector('.blog-item-content') //Get content display

        //Display Setup--------------------------
        blogItem.style.display = 'block'
        blogItem.classList.remove('blog-item-template')//Remove template class.
        blogItem.classList.add('blog-item') //New class to differentiate from template
        blogTitle.textContent = blog.title //Set title display
        blogContent.textContent = blog.content  // Set content display

        fragment.appendChild(blogItem)
    }

    //Attach document fragment to feedBatch <ul>--------------------------
    feedBatch.appendChild(fragment)
}


//Form Submission----------------------------------
/*
1. Check Validity Before Actions
2. If invalid: Show Alert
3. If Valid:
    1. Submit the data into a new FormData
    2. Call renderFeed() to show all blogItems with new blogItem added
    3. Store the array of blogItems into localStorage
    4. Clear Fields
*/
createBlogForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //Stop creation of blog when invalid, display error alert.
    switch (true){
        case !blogTitleInput.validity.valid:
            console.log('Cannot Create Blog, Check title field.')
            alert('Something is incorrect! Update highlighted field(s).(っ °Д °;)っ')
            return

        break;
        case !blogContentInput.validity.valid:
            console.log('Cannot Create Blog, Check title field.')
            alert('Something is incorrect! Update highlighted field(s).(っ °Д °;)っ')
            return
        break;
        default : 
    }

    //Create new blog with inputs if all valid
    const newBlogData = new FormData(createBlogForm) //new form submission 
    renderFeed() //New information pushed into array here
    localStorage.setItem('feedDisplayData', JSON.stringify(feedData)) //Stringify array again for local storage
    alert('New blog added to timeline (o゜▽゜)o☆')
    createBlogForm.reset()


})