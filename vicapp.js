let elements = document.getElementsByName('cssProperty'); 
let div = document.getElementsById('modify');
function Set () 
{
   
    for (let index=o;index<elements.length;index++)
    {
        let cssProperty = (elements[index].getAttribute('id'));
        let cssValue = (elements[index].value);
        console.log (cssProperty,cssValue);

        div.style[cssProperty] = cssValue;
    }

}

document.getElementById('set').addEventListener('click',set);