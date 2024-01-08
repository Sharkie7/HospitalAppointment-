export const getFormattedCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" });
  const dateArray = currentDate.split("/");
  const formattedDate = dateArray[2] + "-" + dateArray[0] + "-" + dateArray[1];
  return formattedDate;
};

export const formateDate = (value) => {
  let dateArray = value.split("-");
  const formattedDate = dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
  return formattedDate;
};
