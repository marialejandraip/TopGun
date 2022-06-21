const api = () => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve({name: 'David'})
    },1000)
  });
}

const getUser = async () => {
  try {
    const response = await api();
    console.log(response);
    return response;
  } catch (error) {
    return error
  }
  
}

export default getUser