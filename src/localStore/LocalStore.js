const addData = (id) => {
  const getData = localStorage.getItem('appliedJobs');
  const parseData = JSON.parse(getData);
  let jobs = [];
  if (!getData) {
    jobs.push(id);
  } else {
    const findJobs = parseData?.find((jobsId) => jobsId === id);
    if (!findJobs) {
      jobs = [...parseData, id];
    }
  }
  localStorage.setItem('appliedJobs', JSON.stringify(jobs));
};
const getLocalData = () => {
  const getData = localStorage.getItem('appliedJobs');
  return JSON.parse(getData);
};
export { addData, getLocalData };
