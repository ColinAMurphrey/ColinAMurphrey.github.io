let last_modified_date = new Date(document.lastModified);
last_modified_date = `${last_modified_date.getMonth() + 1}/${last_modified_date.getDate()}/${last_modified_date.getFullYear()}`;
console.log(`The webpage was created on: ${last_modified_date}`);

document.getElementById('dateModified').innerHTML = `Last modified: ${last_modified_date}`;