// alert 

const alert = (msg, type="danger")=>{
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}

// email validation
const isEmail = (email)=>{
  const pattern = /^[a-z0-9\._]{2,}@[a-z0-9]{2,}\.[a-z]{2,5}$/;
  return pattern.test(email);
}

const isMobile = (mobile)=>{
  const pattern = /^(\+8801|8801|01)[0-9]{9}$/;

  return pattern.test(mobile);
}
// Data send LocalStorage
const sendDataLS = (key, stdData)=>{
  const data = localStorage.getItem(key);
  let lsData;
  if (data) {
    lsData = JSON.parse(data);
  }else{
    lsData = [];
  }

  lsData.push(stdData);

  localStorage.setItem(key, JSON.stringify(lsData));
}


// Data Get LocalStorage

const getDataLS = (key)=>{
  const data = localStorage.getItem(key);
  
  if (data) {
    return JSON.parse(data);
  }else{
    false
  }
}

