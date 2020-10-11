let element = document.createElement('div');

element.style.cssText = "width:300px;height:300px;background:blue;";

element.onclick = function (){alert('hello');};

document.body.appendChild (element);



    let elements = 
    document.getElementsByName('cssProperty');
    console.log(elements); 

    let div = document.getElementById('modify');

    function Set () 
{
    for ( index =0; index<elements.length; index++)
    {
        let cssProperty = (elements[ index ].getAttribute('id'));

        let cssValue = (elements[ index ].value);
   
        div.style[ cssProperty ] = cssValue;
    }
}
 
document.getElementById('set').addEventListener('click', set);

document.getElementById('set').addEventListener('dblclick', set);