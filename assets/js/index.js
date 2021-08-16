const root = document.querySelector('#root');


function addNewCards(array){
  let j = array.length
  for(let i=0; i<j; i++){
    const li = document.createElement('li');
    li.classList.add('cardWrapper', 'userCard')
    root.append(li);
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('imgWrapper')
    imgWrapper.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    // const texto = array[i].name.map((word => {return word[0]}));
    // imgWrapper.textContent = texto;
    
    li.append(imgWrapper);
    const img = document.createElement('img');
    img.src = array[i].profilePicture;
    img.alt = array[i].name;
    img.addEventListener('error', (e) => {
      const { target } = e;
      target.style.display = 'none';
    });
    img.classList.add('img');
    imgWrapper.append(img);
    const h = document.createElement('h1');
    h.classList.add('cardName')
    h.textContent = array[i].name;
    li.append(h);
    const p = document.createElement('p')
    p.textContent = array[i].description;
    li.append(p);
  }
}





