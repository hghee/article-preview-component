const SHARECONTAINER = document.querySelector('.sns-share-container');
const SHAREBTN = document.querySelector('.sns-share-btn');
const SHAREICON = SHAREBTN.querySelector('img');

const CLASSNAME = {
  shown : 'shown',
  hidden : 'hidden',
  actived : 'actived',
  nonActived : 'non-actived',
  filterGray : 'filter-gray',
  filterWhite : 'filter-white',
};
const TRUE = 'true';
const FALSE = 'false';

function changedValue(a,b,c,d,f,x,y) {
  SHARECONTAINER.classList.replace(a, b);
  SHAREBTN.classList.replace(c,d);
  SHAREBTN.ariaExpanded = f;
  SHAREICON.classList.replace(x,y);
}

SHAREBTN.addEventListener('click', function(e) {
  if(SHARECONTAINER.classList.contains(CLASSNAME.hidden)) { 
    changedValue(CLASSNAME.hidden, CLASSNAME.shown, CLASSNAME.nonActived, CLASSNAME.actived, TRUE, CLASSNAME.filterGray, CLASSNAME.filterWhite)
  } else {
    changedValue(CLASSNAME.shown, CLASSNAME.hidden, CLASSNAME.actived, CLASSNAME.nonActived, FALSE, CLASSNAME.filterWhite, CLASSNAME.filterGray);
  }
})