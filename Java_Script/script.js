// This function is used to validate the query and feedback form
function myValidate()
{
    var password = document.getElementById('subPassword').value;
    var confPassword = document.getElementById('confirmPassword').value;
    if(password == "")
    {
      alert("Enter your password");
      return false;
    }
    if(confPassword == "" || confPassword != password)
    {
      alert("passwords do not match");
      return false;
    }
}

// Function to toggle display of an element
function toggleDisplay(elementId, arrowId) 
{
    const element = document.getElementById(elementId);
    const arrow = document.getElementById(arrowId);
    
    arrow.classList.toggle('rotate');
    element.classList.toggle('showInformation');
}

// Functions show and hide login and signup form 
function showLoginForm() 
{
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('.backgroundBlur').style.display = 'flex';
    document.getElementById('hideMenu').classList.toggle('showMenu');
  }
  
  function showSignupForm() 
  {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.backgroundBlur').style.display = 'flex';
    document.getElementById('hideMenu').classList.toggle('showMenu');
  }
  
  function closeForm() 
  {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.backgroundBlur').style.display = 'none';
    document.getElementById('hideMenu').classList.toggle('showMenu');
  }
  
  function showMenu() 
  {
    document.getElementById('hideMenu').classList.toggle('showMenu');
  }
 
$(document).ready(function() 
{

  // This function will load global footer and header
  $(function()
  {
    $('#footer').load('footer.html');
    $('header.indexHeader').load('header.html');
    $('div.backgroundBlur').load('loginForm.html');
  });

  // after this point margin will stop increasing
  var stopPoint = 3400; 

  // This function will increase the top margrin of the side bar to make it feel like fixed
  $(window).scroll(function() 
  {
    // this inbuilt fuction will calculate the px when user scrolls up or down
    var scrollTop = $(window).scrollTop();
    if (scrollTop < stopPoint) 
    {
      var newMargin = 50 + scrollTop * 0.1; 
      $('.fixedDiv').css('margin-top', newMargin + 'px');
    }
  });

  // This function will map active content and heaing on aside
  $(window).scroll(function() 
  {
    var scrollPos = $(window).scrollTop();
    $('section').each(function() 
    {
      var sectionTop = $(this).offset().top - 100; 
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) 
      {
        // Here we get the id of current section and apply css to corresponding heading in aside
        var sectionId = $(this).attr('id');
        $('.fixedDiv div').removeClass('highlight');
        $('.fixedDiv div#side' + sectionId).addClass('highlight');
      }
    });
  });

});


  