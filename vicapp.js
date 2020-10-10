function Set () 
{
    let elements = document.getElementsByName('cssProperty'); 
    for (let index=o;index<elements.length;index++)
    {
        let cssProperty = (elements[index].getAttribute('id'));
        let cssValue = (elements[index].value);
        console.log (cssProperty,cssValue);

        let div = document.getElementsById('modify');
        div.style[cssProperty] = cssValue;
    }

}

document.getElementById('set').addEventListener('click',set);