let featuresLink = document.getElementById('featuresLink');
let companyLink = document.getElementById('companyLink');
let featuresArrowDown = document.getElementById('featuresArrowDown');
let featuresContainer = document.getElementById('featuresContainer');
let companyContainer = document.getElementById('companyContainer');
let companyArrowDown = document.getElementById('companyArrowDown');
let header = document.getElementsByTagName('header')[0];
let leftLink =document.getElementById('leaveLink');
let menuOpen =document.getElementById('menuOpen');
let menuClose =document.getElementById('menuClose');
let transparentMenu = document.getElementById('transparentMenu');
let mobileFeaturesLink = document.getElementById('mobileFeaturesLink');
let mobileCompanyLink = document.getElementById('mobileCompanyLink');
let mobileFeaturesContainer = document.getElementById('mobileFeaturesContainer');
let mobileCompanyContainer = document.getElementById('mobileCompanyContainer');
let mobileFeaturesArrowDown = document.getElementById('mobileFeaturesArrowDown');
let mobileCompanyArrowDown = document.getElementById('mobileCompanyArrowDown');
let isDisplayed = false;

featuresLink.setAttribute('tabindex', '0');
featuresContainer.setAttribute('tabindex', '0');
featuresLink.addEventListener('mouseover', toggleArrow);
featuresLink.addEventListener('focus', toggleArrow);
  
function toggleArrow() {
    featuresArrowDown.src = 'images/icon-arrow-up.svg';
    featuresContainer.style.display = 'block';
    companyContainer.style.display = 'none';
    companyArrowDown.src = 'images/icon-arrow-down.svg';
}

featuresContainer.addEventListener('mouseleave', leaveLink);
featuresContainer.addEventListener('blur', leaveLink);

function leaveLink() {
    featuresArrowDown.src = 'images/icon-arrow-down.svg';
    featuresContainer.style.display = 'none';
}

companyLink.setAttribute('tabindex', '0');
companyLink.addEventListener('mouseover', toggleCompanyArrow);
companyLink.addEventListener('focus', toggleCompanyArrow);
  
function toggleCompanyArrow() {
    companyArrowDown.src = 'images/icon-arrow-up.svg';
    featuresArrowDown.src = 'images/icon-arrow-down.svg';
    featuresContainer.style.display = 'none';
    companyContainer.style.display = 'block';
}

companyContainer.addEventListener('mouseleave', leaveCompanyLink);
companyContainer.addEventListener('blur', leaveCompanyLink);

function leaveCompanyLink() {
    companyArrowDown.src = 'images/icon-arrow-down.svg';
    companyContainer.style.display = 'none';
}

header.onmouseleave = function(){
    featuresContainer.style.display='none';
    companyContainer.style.display = 'none';
    featuresArrowDown.src = 'images/icon-arrow-down.svg';
    companyArrowDown.src = 'images/icon-arrow-down.svg';
}

leftLink.onmouseover = function() {
    featuresContainer.style.display='none';
    companyContainer.style.display = 'none';
    featuresArrowDown.src = 'images/icon-arrow-down.svg';
    companyArrowDown.src = 'images/icon-arrow-down.svg';
}

menuOpen.onclick = function() {
    transparentMenu.style.display = 'block'
}

menuClose.onclick = function() {
    transparentMenu.style.display = 'none'
}

mobileFeaturesLink.onclick = function() {
    if (!isDisplayed) {
      mobileFeaturesContainer.style.display = 'block';
      mobileFeaturesArrowDown.src = 'images/icon-arrow-up.svg';
      isDisplayed = true;
    } else {
      mobileFeaturesContainer.style.display = 'none';
      mobileFeaturesArrowDown.src = 'images/icon-arrow-down.svg';
      isDisplayed = false;
    }
}

mobileCompanyLink.onclick = function() {
    if (!isDisplayed) {
      mobileCompanyContainer.style.display = 'block';
      mobileCompanyArrowDown.src = 'images/icon-arrow-up.svg';
      isDisplayed = true;
    } else {
      mobileCompanyContainer.style.display = 'none';
      mobileCompanyArrowDown.src = 'images/icon-arrow-down.svg';
      isDisplayed = false;
    }
  }


