export const getSavedCakeIds = () => {
    const savedCakeIds = localStorage.getItem("saved_cakes")
      ? JSON.parse(localStorage.getItem("saved_cakes"))
      : [];
  
    return savedCakeIds;
  };
  
  export const saveCakeIds = (cakeIdArr) => {
    if (cakeIdArr.length) {
      localStorage.setItem("saved_cakes", JSON.stringify(cakeIdArr));
    } else {
      localStorage.removeItem("saved_cakes");
    }
  };
  
  export const removeCakeId = (title) => {
    const savedCakeIds = localStorage.getItem("saved_cakes")
      ? JSON.parse(localStorage.getItem("saved_cakes"))
      : null;
  
    if (!savedCakeIds) {
      return false;
    }
  
    const updatedSavedCakeIds = savedCakeIds?.filter((savedCakeId) => savedCakeId !== cakeId);
    localStorage.setItem("saved_cakes", JSON.stringify(updatedSavedCakeIds));
  
    return true;
  };