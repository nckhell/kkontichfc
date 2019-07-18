export const mapUrlToBreadCrumb = (url: string): string => {
  let arr = url.split("/");
  arr = arr.filter(entry => {
    return entry.trim() !== "";
  });

  return arr.map(item => ({
    title: item,
    url: ""
  }));
};

export default mapUrlToBreadCrumb;
