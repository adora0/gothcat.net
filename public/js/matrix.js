scriptTag = document.getElementsByTagName('script');
scriptTag = scriptTag[scriptTag.length - 1];
parent = scriptTag.parentNode;

parent.innerText = 'Placeholder';