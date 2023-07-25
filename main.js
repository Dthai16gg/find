function find() {
    //create loading 1 to 100 %
    var loading = document.createElement('div');
    loading.setAttribute('id', 'loading');
    loading.innerHTML = 'Loading...';
    const values = [];
    values.push('Nhung');
    values.push('Nguyen Hong Nhung');
    values.push('Nhung Nguyen');
    values.push('Nhung Nguyen Hong');
    values.push('Hong Nhung');
    let value = prompt('Enter your Name');
    console.log(value);
    if (value == null || value == '') {
        loading.remove();
        loading.innerHTML = 'Please enter your name';
    } else if (values.includes(value)) {
        loading.remove();
        loading.innerHTML = 'I found you';
        loading.style.marginTop = '40px';
        loading.style.fontSize = '30px';
        loading.style.fontWeight = 'bold';
        loading.style.color = 'red';
    } else {
        loading.remove();
        loading.innerHTML = 'Not you';
    }
    document.body.appendChild(loading);
}
