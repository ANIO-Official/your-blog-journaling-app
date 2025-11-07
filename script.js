//Global & DOM Variables

//Form---------
const createBlogForm = document.querySelector('#create-blog-form')

//Inputs----------
const blogTitleInput = document.querySelector('#create-blog-title')
const blogContentInput = document.querySelector('#create-blog-content')


//Errors
const blogTitleError = document.querySelector('#title-error')
const blogContentError = document.querySelector('#content-error')

blogTitleInput.addEventListener('input', (event)=>{
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

blogContentInput.addEventListener('input', (event)=>{
    if (blogContentInput.validity.valueMissing) {
        blogContentInput.setCustomValidity("You haven't entered any content.")
    }
    else if (blogContentInput.validity.tooShort) {
        blogContentInput.setCustomValidity('Must be at least 10 characters long.')
    }
    else { blogContentInput.setCustomValidity('') }
    blogContentError.textContent = blogContentInput.validationMessage
})